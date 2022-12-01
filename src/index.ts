#!/usr/bin/env node

import yargs from "yargs";
import { createProject } from "./commands";
import { selectModule } from "./commands/subtasks/selectModule";
const args = yargs(process.argv.slice(2))
  .command(
    "create-app",
    "Create a new Glim Project",
    (yargs) => {
      return yargs;
    },
    (argv) => {
      createProject();
    }
  )
  .command(
    "generate",
    "generate modules",
    (yargs) => {
      return yargs;
    },
    (argv) => {
      selectModule();
    }
  )
  .command(
    "ui",
    "open glim ui",
    (yargs) => {
      return yargs;
    },
    (argv) => {
      console.log("coming soon");
    }
  )
  .help().argv;
