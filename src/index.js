#! /usr/bin/env node
import { createProject } from "./commands/create-project.js";
import yargs from "yargs";
import chalk from "chalk";
import { createComponent } from "./commands/create-component.js";
import { createScreen } from "./commands/create-screen.js";
import printmessage from "print-message";
const args = yargs(process.argv.slice(2))
  .option("component", {
    describe: "Create a New Component",
    string: "component name",
  })
  .option("screen", {
    describe: "Create a New Screen",
    string: "screen name",
  }).argv;

const Start = async () => {
  if (args._.includes("generate")) {
    if (args.component) {
      createComponent(args.component);
    } else if (args.screen) {
      createScreen(args.screen);
    } else {
      console.log(chalk.bgRed("invalid flag"));
    }
  } else if (args._.includes("create-app")) {
    if (args._[1]) {
      createProject(args._[1]);
    } else {
      printmessage(["Missing Project Name"], {
        borderColor: "red",
      });
    }
  } else {
    printmessage(
      [
        "Unknown Command",
        " ",
        "Available Commands - ",
        "create-app [app-name]",
        "generate [type] [app-name]",
      ],
      {
        borderColor: "red",
      }
    );
  }
};
Start();
