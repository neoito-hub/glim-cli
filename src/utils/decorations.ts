import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { AppDetailsInterface } from "../types/interfaces";

const packegeRegex = new RegExp(/^com\.[a-zA-Z]+$/);
const appnameRegex = new RegExp(/^[a-zA-Z]+$/);

// Show decerated text while creating a new project
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

// Show decerated text when project successsfully created
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

// Show user preferences while creating a new project
const displaySelectedDetails = (projectDetails: AppDetailsInterface) => {
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(`👉🏻 App name : ${projectDetails.appname.value} `);
  console.log(`👉🏻 Package name : ${projectDetails.packagename.value} `);
  console.log(`👉🏻 Store Management : ${projectDetails.selectedStore.value} `);
  console.log(`👉🏻 Initailize Detox : ${projectDetails.detox.value} `);
  console.log(`👉🏻 Initailize fastlane : ${projectDetails.fastlane.value} `);
  console.log(`👉🏻 Package manager : ${projectDetails.packagemanager.value} `);
  console.log(
    `👉🏻 Install Dependencies : ${projectDetails.installdependencies.value} `
  );
  console.log(
    `👉🏻 Project Path : ${process.cwd()}/${projectDetails.appname.value} `
  );
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(" ");
};

// Ask questions to user while creating a new project
const projectQuestions = async (): Promise<AppDetailsInterface> => {
  let appdetails: AppDetailsInterface = {
    packagename: { value: "" },
    selectedStore: { value: "redux" },
    appname: {
      value: "",
    },
    initializegit: { value: false },
    detox: { value: false },
    fastlane: { value: false },
    installdependencies: { value: false },
    packagemanager: { value: "yarn" },
  };
  return new Promise(async (resolve, reject) => {
    appdetails.appname = await inquirer.prompt({
      name: "value",
      type: "input",
      message: "Enter the App name: ",
      default() {
        return "glimapp";
      },
      validate: async (input: string) => {
        if (!appnameRegex.test(input)) {
          return "Invalid Appname";
        }
        return true;
      },
    });
    appdetails.packagename = await inquirer.prompt({
      name: "value",
      type: "input",
      message: "Enter the Package name: ",
      default() {
        return `com.${appdetails.appname.value}`;
      },
      validate: async (input: string) => {
        if (!packegeRegex.test(input)) {
          return "Invalid packagename";
        }
        return true;
      },
    });
    appdetails.selectedStore = await inquirer.prompt({
      name: "value",
      type: "list",
      message: "Choose the State management: ",
      choices: ["redux", "zustand"],
    });
    appdetails.initializegit = await inquirer.prompt({
      name: "value",
      type: "confirm",
      message: "Do you want to initialize git ?",
      default() {
        return true;
      },
    });
    appdetails.detox = await inquirer.prompt({
      name: "value",
      type: "confirm",
      message: "Do you want to initialize detox for automation ?",
      default() {
        return false;
      },
    });
    appdetails.fastlane = await inquirer.prompt({
      name: "value",
      type: "confirm",
      message: "Do you want to initialize fastlane for CI/CD ?",
      default() {
        return false;
      },
    });
    appdetails.packagemanager = await inquirer.prompt({
      name: "value",
      type: "list",
      message: "Choose the Package manager: ",
      choices: ["npm", "yarn"],
    });
    appdetails.installdependencies = await inquirer.prompt({
      name: "value",
      type: "confirm",
      message: "Do you want to Install the Dependencies ?",
      default() {
        return false;
      },
    });
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
