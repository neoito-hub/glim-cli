import { execSync, exec } from "node:child_process";
import { createSpinner } from "nanospinner";
import path from "node:path";
import * as fs from "fs";

const cloneProject = async (appname: any) => {
  const spinner = createSpinner("Creating Project ").start();
  return new Promise((resolve, reject) => {
    exec(
      `git clone https://github.com/devpenzil/Template-Project ${appname}`,
      (err) => {
        if (err) {
          spinner.error();
          process.exit(1);
        } else {
          spinner.success();
          resolve(true);
        }
      }
    );
  });
};

const installNodeModules = async (appname: any) => {
  const nodeSpinner = createSpinner(
    "Installing Dependencies... (It may take some time)"
  ).start();
  return new Promise((resolve, reject) => {
    exec(`cd ${appname} && npm install --legacy-peer-deps`, (err) => {
      if (err) {
        nodeSpinner.error();
        console.log(err);
        process.exit(1);
      } else {
        nodeSpinner.update({ text: "Dependencies Installed ✅" });
        nodeSpinner.success();
        resolve(true);
      }
    });
  });
};

const installPods = async (appname: any) => {
  if (process.platform === "darwin") {
    const podsSpinner = createSpinner("Installing Pods...").start();
    return new Promise((resolve, reject) => {
      exec(`cd ${appname}/ios && pod install`, (err) => {
        if (err) {
          podsSpinner.error({ text: err.message });
          process.exit(1);
        } else {
          podsSpinner.update({ text: "Pods installed ✅" }).success();
          resolve(true);
        }
      });
    });
  }
};

const miscSetup = async (appname: any) => {
  const miscSpinner = createSpinner("Setting up ").start();
  return new Promise((resolve, reject) => {
    exec(`cd ${appname} && rm -rf .git`, (err) => {
      if (err) {
        miscSpinner.error();
        console.log(err);
        process.exit(1);
      } else {
        miscSpinner.success();
        resolve(true);
      }
    });
  });
};

const renameProject = async (appname: any, packagename: any) => {
  const spinner = createSpinner("Renaming...").start();
  return new Promise((resolve, reject) => {
    exec(
      `cd ${appname} && npx react-native-rename ${appname} -b ${packagename} `,
      (err) => {
        if (err) {
          spinner.error({ text: err.message });
          process.exit(1);
        } else {
          spinner.update({ text: `Project Renamed ✅` }).success();
          resolve(true);
        }
      }
    );
  });
};

const setProject = async (appname: any) => {
  const spinner = createSpinner("Creating Project...").start();
  const root = path.join(path.dirname(fs.realpathSync(__filename)), "../");
  return new Promise((resolve, reject) => {
    fs.mkdir(appname, (err) => {
      if (!err) {
        execSync(`cp -r ${root}boilerplate/ ${appname}/`);
        spinner.update({ text: "Project Created ✅" }).success();
        resolve(true);
      } else {
        spinner.error({
          text:
            err.code === "EEXIST"
              ? `Folder ${appname} already exist ❌`
              : "Something went wrong",
        });
      }
    });
  });
};
export {
  cloneProject,
  installNodeModules,
  installPods,
  miscSetup,
  renameProject,
  setProject,
};
