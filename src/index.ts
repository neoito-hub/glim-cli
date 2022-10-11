import yargs from "yargs";

// * get arguments from command line
const args = yargs(process.argv.slice(2));

// * Initial Function
const start = async () => {
  console.log(args);
};
start();
