import { execSync, exec } from "node:child_process";
import { createSpinner } from "nanospinner";
import path, { resolve } from "node:path";
import * as fs from "fs";
import { sleep } from "./helper";
import { getPackageManager } from "./react-native";
import { filecopy } from "../constants/system";
import * as readline from "readline-sync";
import { configTemplate } from "../template/config";
import { AppDetailsInterface } from "../types/interfaces";
import { spinner } from "@clack/prompts";

/**
 * Clone Project from Github
 * @param appname
 * @param giturl
 * @returns boolean
 */
const cloneProject = async (appname: string, giturl: string) => {
  const s = spinner();
  s.start("Cloning Repo");

  return new Promise((resolve, reject) => {
    exec(`git clone ${giturl} ${appname}`, (err) => {
      if (err) {
        if (err.code === 128) {
          s.stop(`Unable to create the project. ${appname} already exist`);
        } else {
          s.stop();
        }
        process.exit(1);
      } else {
        s.stop("Repo cloned");
        resolve(true);
      }
    });
  });
};

/**
 * Install Node Modules
 * @param appname
 * @returns boolean
 */
const installNodeModules = async (appname: any) => {
  const s = spinner();
  s.start(`Hold on, were grabbing the dependencies you need for ${appname}`);
  const packagemanager = getPackageManager();
  return new Promise((resolve, reject) => {
    exec(
      `cd ${appname} &&  ${packagemanager} install ${
        packagemanager === "npm" ? "--legacy-peer-deps" : ""
      }`,
      (err) => {
        if (err) {
          s.stop("Unable to install dependencies");
          console.log(err);
          process.exit(1);
        } else {
          s.stop("Dependencies Installed ✅");
          resolve(true);
        }
      }
    );
  });
};

/**
 * Install Pods fro Ios
 * @param appname
 * @returns boolean
 */
const installPods = async (appname: any) => {
  const s = spinner();
  if (process.platform === "darwin") {
    s.start("Installing Pods");
    return new Promise((resolve, reject) => {
      exec(`cd ${appname}/ios && pod install`, (err) => {
        if (err) {
          console.log(err);
          s.stop(err.message);
          process.exit(1);
        } else {
          s.stop("Pods installed ✅");
          resolve(true);
        }
      });
    });
  }
};

/**
 * Remove existing git configuration
 * @param appname
 * @returns boolean
 */
const miscSetup = async (appname: any) => {
  const s = spinner();
  s.start("Setting up ");
  return new Promise((resolve, reject) => {
    exec(`cd ${appname} && rm -rf .git`, (err) => {
      if (err) {
        s.stop();
        console.log(err);
        process.exit(1);
      } else {
        s.stop("Ready to launch");
        resolve(true);
      }
    });
  });
};

/**
 * Initialize a new github Repo
 * @param appname
 * @returns boolean
 */
const initializeGit = async (appname: any) => {
  const s = spinner();
  s.start("inintailizing git");
  return new Promise((resolve, reject) => {
    exec(`cd ${appname} && git init`, (err) => {
      !err &&
        exec(`cd ${appname} && git add .`, (err) => {
          exec(
            `cd ${appname} && git commit -m "Project Created with Glim"`,
            (err) => {
              if (err) {
                s.stop("unable to initalize git");
              } else {
                s.stop("Initialized git");
                resolve(true);
              }
            }
          );
        });
    });
  });
};

/**
 * Rename the existing project
 * @param appname
 * @param packagename
 * @returns boolean
 */
const renameProject = async (appname: any, packagename: any) => {
  const s = spinner();
  s.start("Renaming Project");
  return new Promise((resolve, reject) => {
    exec(
      `cd ${appname} && npx react-native-rename ${appname} -b ${packagename} `,
      (err) => {
        if (err) {
          s.stop(err.message);
          process.exit(1);
        } else {
          s.stop(`Project Renamed ✅`);
          resolve(true);
        }
      }
    );
  });
};

// ! Not in use
/**
 * Copy project biolerplate from local
 * @param appname
 * @returns boolean
 */
const setProject = async (appname: any) => {
  const spinner = createSpinner(
    `Cooking new project seed for ${appname}`
  ).start();
  await sleep();
  const root = path.join(path.dirname(fs.realpathSync(__filename)), "../");
  return new Promise((resolve, reject) => {
    fs.mkdir(appname, (err) => {
      if (!err) {
        execSync(`${filecopy} ${root}boilerplate/. ${appname}/.`);
        spinner.update({ text: "Project Created ✅" }).success();
        resolve(true);
      } else {
        spinner.error({
          text:
            err.code === "EEXIST"
              ? `Hmm seems like ${appname} already exists 🤕 `
              : "Something went wrong",
        });
      }
    });
  });
};

/**
 * Check the terminal location is inside or outside project
 * @returns boolean
 */
const checkIfInsideProject = async () => {
  const s = spinner();
  s.start("Confirming that you are inside the project");
  await sleep();
  return new Promise((resolve, reject) => {
    fs.readdir(`${process.cwd()}`, (err, files) => {
      if (files.includes("glim.config.json")) {
        s.stop("Confirmed");
        resolve(true);
      } else {
        s.stop(
          "Its seems like you are outside the project. 'Generate' command only work with glim project directory"
        );
      }
    });
  });
};

/**
 * Check if a file exist or not
 * @param paths
 * @param files
 * @returns boolean
 */
const checkFileExist = async (paths: Array<string>, files: Array<string>) => {
  const spinner = createSpinner("checking file avilability").start();
  await sleep();
  return new Promise((resolve, reject) => {
    paths.forEach((route) => {
      fs.readdir(route, (err, file) => {
        if (file.includes(files[0] || files[1])) {
          if (
            readline.keyInYN(
              "\r\n The filename already exist. Do you want to rewrite ?"
            )
          ) {
            spinner.update({ text: "Rewriting existing file" }).success();
          } else {
            spinner.update({ text: "Failed to create new state" }).error();
            process.exit(1);
          }
        } else {
          err && console.log(err);
        }
      });
    });
    resolve(true);
    spinner.stop();
  });
};

/**
 * Create a new configuration file
 * @param details
 * @returns boolean
 */
const createConfigFile = async (details: AppDetailsInterface) => {
  const s = spinner();
  s.start(`creating config file`);
  await sleep();
  return new Promise((resolve, reject) => {
    fs.writeFile(
      `${details.appname}/glim.config.json`,
      configTemplate(details),
      (err) => {
        if (err) {
          s.stop("Unable to create config file");
        } else {
          s.stop("Config file created");
        }
      }
    );
    resolve(true);
  });
};

export {
  cloneProject,
  installNodeModules,
  installPods,
  miscSetup,
  renameProject,
  setProject,
  checkIfInsideProject,
  checkFileExist,
  createConfigFile,
  initializeGit,
};
