import { execSync, exec } from "node:child_process";
import { createSpinner } from "nanospinner";

const cloneProject = async (appname: any) => {
  const spinner = createSpinner("Creating Project [2/6]").start();
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
  const nodeSpinner = createSpinner("Installing Dependencies [4/6]").start();
  return new Promise((resolve, reject) => {
    exec(`cd ${appname} && npm install`, (err) => {
      if (err) {
        nodeSpinner.error();
        process.exit(1);
      } else {
        nodeSpinner.success();
        resolve(true);
      }
    });
  });
};
const installPods = async (appname: any) => {
  if (process.platform === "darwin") {
    const podsSpinner = createSpinner("Installing Pods [5/6]").start();
    return new Promise((resolve, reject) => {
      exec(`cd ${appname}/ios && npm install`, (err) => {
        if (err) {
          podsSpinner.error();
          console.log(err);
          process.exit(1);
        } else {
          podsSpinner.success();
          resolve(true);
        }
      });
    });
  }
};
const miscSetup = async (appname: any) => {
  const miscSpinner = createSpinner("Setting up [6/6]").start();
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
  const spinner = createSpinner("Renaming [3/6]").start();
  return new Promise((resolve, reject) => {
    exec(
      `cd ${appname} && npx react-native-rename ${appname} -b ${packagename} `,
      (err) => {
        if (err) {
          spinner.error();
          console.log(err);
          process.exit(1);
        } else {
          spinner.success();
          resolve(true);
        }
      }
    );
  });
};
export {
  cloneProject,
  installNodeModules,
  installPods,
  miscSetup,
  renameProject,
};
