import inquirer from "inquirer";
import { checkIfInsideProject } from "../../utils/file-system";
import { toPascalCase } from "../../utils/namevalidator";
import { createComponent } from "../create-component";
import { createScreen } from "../create-screen";
import { createStore } from "../create-store";

const appnameRegex = new RegExp(/^[a-zA-Z]+$/);

const selectModule = async () => {
  await checkIfInsideProject();
  const moduleType = await inquirer.prompt({
    name: "value",
    type: "list",
    choices: ["component", "screen", "store"],
    message: "Choose which type you want to generate",
  });
  const modulename = await inquirer.prompt({
    name: "value",
    message: `Enter the ${moduleType.value} name`,
    type: "input",
    validate: async (input: string) => {
      if (!appnameRegex.test(input)) {
        return `Invalid ${moduleType.value} Name`;
      }
      return true;
    },
  });
  if (moduleType.value === "component") {
    createComponent(toPascalCase(modulename.value));
  } else if (moduleType.value === "screen") {
    createScreen(toPascalCase(modulename.value));
  } else if (moduleType.value === "store") {
    createStore(modulename.value);
  } else {
    process.exit(1);
  }
};
export { selectModule };
