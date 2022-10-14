import { validator } from "../utils/namevalidator";
import * as fsextra from "fs-extra";
import { createfolder } from "../utils/file-system";
import appRootPath from "app-root-path";
import { checkversions } from "../utils/react-native";
import shell from "shelljs";

// * Function to create new react native project
const createProject = async (appname: string) => {
  let packagemanager: any = "";
  await checkversions().then((response) => {
    packagemanager = response;
  });
  await validator(appname);
  await createfolder(appname);
  fsextra
    .copy(appRootPath.path + "/boilerplate", appRootPath.path + "/" + appname)
    .then(() => {
      shell.cd(appname);
      packagemanager === "yarn" && shell.exec("yarn");
      packagemanager === "npm" && shell.exec("npm installe--legacy-peer-deps");
      shell.cd("ios");
      shell.exec("pod install");
    })
    .catch((err) => {
      console.log(err);
    });
};
export { createProject };
