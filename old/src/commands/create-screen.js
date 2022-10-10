import { validator } from "../utils/Validator.js";
import chalk from "chalk";
export async function createScreen(appname) {
  const validationStatus = await validator(appname);
  if (validationStatus) {
    if (validationStatus) {
      shell.mkdir(appname);
      shell.cd(appname);
      shell.touch(`${appname}.screen.tsx`);
      shell.touch(`${appname}.style.ts`);
    } else {
      console.log(chalk.bgRed("Invalid name format"));
    }
  } else {
    console.log(chalk.bgRed("Invalid name format"));
  }
}
