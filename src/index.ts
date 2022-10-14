import yargs from "yargs";
import { createComponent, createProject } from "./commands";

// * get arguments from command line
const args: any = yargs(process.argv.slice(2)).parse();

// * Initial Function
const start = async () => {
  if (args["_"].includes("create-app")) {
    createProject(args["_"][1]);
  }
};
start();
