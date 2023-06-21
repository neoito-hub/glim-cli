import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { AppDetailsInterface } from "../types/interfaces";
import { text, confirm, select, isCancel, cancel } from "@clack/prompts";

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
        console.log(" ");
        resolve(true);
      }
    );
  });
}

// Show user preferences while creating a new project
const displaySelectedDetails = (projectDetails: AppDetailsInterface) => {
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(`👉🏻 App name : ${projectDetails.appname} `);
  console.log(`👉🏻 Package name : ${projectDetails.packagename} `);
  console.log(`👉🏻 Package manager : ${projectDetails.packagemanager} `);
  console.log(
    `👉🏻 Install Dependencies : ${projectDetails.installdependencies} `
  );
  console.log(`👉🏻 Project Path : ${process.cwd()}/${projectDetails.appname} `);
  console.log(gradient.instagram.multiline("--------------------"));
  console.log(" ");
};

// Ask questions to user while creating a new project
const projectQuestions = async (): Promise<AppDetailsInterface> => {
  let appdetails: AppDetailsInterface = {
    packagename: "",
    appname: "",
    initializegit: true,
    installdependencies: true,
    packagemanager: "yarn",
  };
  return new Promise(async (resolve, reject) => {
    appdetails.appname = await text({
      message: "Enter the App name:",
      placeholder: "PizzaApp",
      validate(value: any) {
        if (!appnameRegex.test(value)) {
          return "Invalid Name";
        }
      },
    });
    if (isCancel(appdetails.appname)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    appdetails.packagename = await text({
      message: "Enter the App package name:",
      placeholder: "com.pizzaapp",
      validate(value: any) {
        if (!packegeRegex.test(value)) {
          return "Invalid Package Name";
        }
      },
    });
    if (isCancel(appdetails.packagename)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    appdetails.initializegit = await confirm({
      message: "Do you want to Initialize git?",
    });
    if (isCancel(appdetails.initializegit)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    appdetails.installdependencies = await confirm({
      message: "Do you want to Install Dependencies?",
    });
    if (isCancel(appdetails.installdependencies)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    appdetails.packagemanager = await select({
      message: "Choose the package manager",
      options: [
        { value: "yarn", label: "Yarn" },
        { value: "npm", label: "Npm" },
      ],
    });
    if (isCancel(appdetails.packagemanager)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

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
