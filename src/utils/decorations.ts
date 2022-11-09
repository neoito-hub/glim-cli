import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";
import * as readline from "readline-sync";
import { sleep } from "./helper";

const packegeRegex = new RegExp(/^com\./);
async function startingProject() {
  return new Promise(async (resolve, reject) => {
    figlet.text(
      "Glim ",
      {
        font: "ANSI Regular",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: true,
      },
      function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        console.log(" ");
        console.log(gradient.instagram.multiline(data));
        resolve(true);
      }
    );
  });
}
const projectQuestions = async () => {
  let packagename = "";
  return new Promise(async (resolve, reject) => {
    for (let index = 1; index > 0; index++) {
      packagename = readline.question("Enter the Package name  ");
      if (packegeRegex.test(packagename)) {
        break;
      } else {
        console.log("invalide package name. enter again");
      }
    }
    resolve(true);
    return packagename;
  });
};
const helpConsole = async () => {
  return new Promise(async (resolve, reject) => {
    console.log("Invalid or Incomplete command");
    console.log(
      `Please refer doc for more details https://neoito-hub.github.io/glim-cli/ `
    );
    resolve(true);
  });
};
export { startingProject, projectQuestions, helpConsole };
