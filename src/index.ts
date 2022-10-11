import yargs from "yargs";

// * get arguments from command line
const args = yargs(process.argv.slice(2))
  .option("component", {
    description: "Create a New Component",
  })
  .option("screen", {
    description: "Create a New Screen",
  }).argv;

// * Initial Function
const start = async () => {};
start();
