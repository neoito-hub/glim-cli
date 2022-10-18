import yargs from "yargs";
import { createComponent, createProject } from "./commands";
import { createScreen } from "./commands/create-screen";
import { toPascalCase } from "./utils/namevalidator";

// * get arguments from command line
const args: any = yargs(process.argv.slice(2)).argv;

// * Initial Function
const start = async () => {
  console.log(args);
  // * check is create-app command is available
  if (args["_"].includes("create-app")) {
    createProject(args["_"][1]);
    // * check is generate command is available
  } else if (args["_"].includes("generate")) {
    if (args?.component) {
      createComponent(toPascalCase(args?.component));
    }
    if (args?.screen) {
      createScreen(toPascalCase(args?.screen));
    }
  } else {
    console.log("available commands are..");
  }
};
start();
