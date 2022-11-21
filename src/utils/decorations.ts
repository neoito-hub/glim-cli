import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";
import * as readline from "readline-sync";
import { AppDetailsInterface } from "../types/interfaces";
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
async function projectCreationCompleted(appname: string) {
  return new Promise(async (resolve, reject) => {
    figlet.text(
      `${appname} Successfully Created`,
      {
        font: "Small",
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
        console.log(gradient.cristal.multiline(data));
        resolve(true);
      }
    );
  });
}
const displaySelectedDetails = (projectDetails: AppDetailsInterface) => {
  console.log(" ");
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(`👉🏻 package name : ${projectDetails.packagename} `);
  console.log(`👉🏻 Store Management : ${projectDetails.selectedStore} `);
  console.log(`👉🏻 Project Path : ${process.cwd()}/${projectDetails.appname} `);
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(" ");
};
const projectQuestions = async (
  appname: string
): Promise<AppDetailsInterface> => {
  const appdetails: AppDetailsInterface = {
    packagename: "",
    selectedStore: "",
    appname: appname,
  };
  return new Promise(async (resolve, reject) => {
    for (let index = 1; index > 0; index++) {
      appdetails.packagename = readline.question("Enter the Package name  ");
      if (packegeRegex.test(appdetails.packagename)) {
        break;
      } else {
        console.log("invalide package name. enter again");
      }
    }
    const storeOptions: Array<"redux" | "zustand" | ""> = ["redux", "zustand"];
    const storeName = readline.keyInSelect(
      storeOptions,
      "Choose the State management."
    );
    appdetails.selectedStore = storeOptions[storeName];
    !appdetails.selectedStore && process.exit();
    displaySelectedDetails(appdetails);
    resolve(appdetails);
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
export {
  startingProject,
  projectQuestions,
  helpConsole,
  projectCreationCompleted,
};
