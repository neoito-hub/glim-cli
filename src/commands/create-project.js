import shell from "shelljs";
import * as fs from "fs";
import * as fsextra from "fs-extra";
import chalk from "chalk";
import { validator } from "../utils/Validator.js";
import appRootPath from "app-root-path";
export async function createProject(appname) {
  const validationStatus = await validator(appname);
  if (validationStatus) {
    fs.mkdir(appname, (err) => {
      if (err === null) {
        fsextra.copy(
          appRootPath.path + "/boilerplate",
          appRootPath.path + "/" + appname
        );
      } else {
        console.log(chalk.bgRed(err.message));
      }
    });
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
