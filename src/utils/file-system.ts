import { execSync, exec } from "node:child_process";
import { createSpinner } from "nanospinner";

const cloneProject = async (appname: any) => {
  const spinner = createSpinner("Creating Project").start();
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
  const nodeSpinner = createSpinner("Installing Node Modules").start();
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
export { cloneProject, installNodeModules };
