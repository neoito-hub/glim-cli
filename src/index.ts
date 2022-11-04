#!/usr/bin/env node

import yargs from "yargs";
import { createComponent, createProject, createScreen } from "./commands";
import { helpConsole } from "./utils/decorations";
import { toPascalCase } from "./utils/namevalidator";

const args: any = yargs(process.argv.slice(2)).argv;

const start = async () => {
  if (args["_"].includes("create-app") && args["_"][1]) {
    createProject(toPascalCase(args["_"][1]));
  } else if (args["_"].includes("generate")) {
    if (args?.component) {
      createComponent(toPascalCase(args?.component));
    } else if (args?.screen) {
      createScreen(toPascalCase(args?.screen));
    } else {
    }
  } else {
    helpConsole();
  }
};
start();
