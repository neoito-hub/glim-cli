import { validator } from "../utils/namevalidator";
import * as fsextra from "fs-extra";
import { createfolder } from "../utils/file-system";
import appRootPath from "app-root-path";
import { checkversions } from "../utils/react-native";
import shell from "shelljs";
import gradient from "gradient-string";
import figlet from "figlet";
import { execSync, exec } from "node:child_process";
import { createSpinner } from "nanospinner";

/**
 * Function to create new react native project
 * @param appname - name of the project folder
 */
const createProject = async (appname: string) => {
  const depsinstall = createSpinner("Installing Dependencies....");
  console.clear();
  figlet("Glim", (err, data) => {
    console.log(gradient.instagram.multiline(data));
  });
  let packagemanager: any = "";
  await checkversions().then((response) => {
    packagemanager = response;
  });
  await validator(appname);
  await createfolder(appname);
  exec(`cp -r ${appRootPath}/dist/boilerplate/* ${appname}/`, (err) => {
    depsinstall.start();
    if (!err) {
      packagemanager === "yarn" && execSync(`cd ${appname} && yarn`);
      packagemanager === "npm" &&
        execSync(`cd ${appname} && npm install --legacy-peer-deps`);
      execSync(`cd ${appname}/ios && pod install`);
      depsinstall.stop();
    } else {
      depsinstall.error();
      console.log(err);
    }
  });
  // await fsextra
  //   .copy(appRootPath.path + "/dist/boilerplate", "/" + appname)
  //   .then(() => {
  //     try {
  //       shell.cd(appname);
  //       packagemanager === "yarn" && execSync("yarn");
  //       packagemanager === "npm" && execSync("npm install --legacy-peer-deps");
  //       shell.cd("ios");
  //       execSync("pod install");
  //     } catch (error) {
  //       console.log({ error });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};
export { createProject };
