import inquirer from "inquirer";
import fs from "fs";
import {
  multiselect,
  text,
  isCancel,
  cancel,
  intro,
  outro,
  spinner,
  select,
} from "@clack/prompts";
import { checkIfInsideProject } from "../../utils/file-system";
import { toPascalCase } from "../../utils/namevalidator";
import { createComponent } from "../create-component";
import { createScreen } from "../create-screen";
import { createStore } from "../create-store";
import { isAPIKeyValid } from "../../openai/keyValidation";

const appnameRegex = /^[a-zA-Z]+$/;

const selectModule = async () => {
  intro("");
  await checkIfInsideProject();

  const spin = spinner();

  const moduleType = await multiselect({
    message: "Choose what you want to create",
    options: [
      { value: "component", label: "Component", hint: "Powered by AI" },
      { value: "screen", label: "Screen" },
    ],
    required: true,
  });

  if (isCancel(moduleType)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  const moduleName = await text({
    message: `Enter the ${moduleType} name`,
    placeholder: "Button / Login screen etc",
  });

  if (isCancel(moduleName)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }
  const defaultPath = "src/components";
  if (!fs.existsSync(defaultPath)) {
    const userPath = await text({
      message: "Enter your component folder path",
      placeholder: "src/comp",
    });

    if (isCancel(userPath)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }
    fs.mkdirSync(userPath, { recursive: true });
    const data = fs.readFileSync("glim.config.json", "utf8");
    const jsonContent = JSON.parse(data);
    jsonContent.path = {
      component: `${userPath}`,
    };
    fs.writeFileSync(
      "glim.config.json",
      JSON.stringify(jsonContent, null, 2),
      "utf8"
    );
  }
  while (true) {
    const moduleGpt = await select({
      message: "Do you want to create this component with the help of AI?",
      options: [
        { value: "Yes", label: "Yes", hint: "Powered by AI" },
        { value: "No", label: "No" },
      ],
    });

    if (isCancel(moduleGpt)) {
      cancel("Operation cancelled.");
      process.exit(0);
    }

    if (moduleType[0] === "component") {
      function stopSpinner() {
        spin.stop("Component created");
        outro("");
      }

      if (moduleGpt === "Yes") {
        const moduleGptKey = await text({
          message: `Enter your open AI key`,
          placeholder: "sa-n9******************iH8f",
        });

        if (isCancel(moduleGptKey)) {
          cancel("Operation cancelled.");
          process.exit(0);
        }

        spin.start("Please wait while we validate your AI key.");
        const validation = await isAPIKeyValid(moduleGptKey);

        if (!validation) {
          spin.stop("API key is invalid.");
          continue;
        } else if (validation) {
          spin.stop("API key validation completed.");
          const componentDescription = await text({
            message: `Describe your component`,
            placeholder:
              "A button in red color/Slider with dm dm  and max values etc..",
          });

          if (isCancel(componentDescription)) {
            cancel("Operation cancelled.");
            process.exit(0);
          }

          try {
            const configData = fs.readFileSync("glim.config.json", "utf8");
            const config = JSON.parse(configData);
            config.apiKey = moduleGptKey;
            const updatedConfig = JSON.stringify(config, null, 2);
            fs.writeFileSync("glim.config.json", updatedConfig, "utf8");
            spin.start("Please wait while we are creating your component");
          } catch (err) {
            console.error("Error parsing JSON:", err);
          }

          await createComponent(
            toPascalCase(moduleName),
            componentDescription,
            stopSpinner,
            moduleGpt
          );
        }
      } else if (moduleGpt === "No") {
        spin.start("Please wait while we are creating your component");
        createComponent(
          toPascalCase(moduleName ? moduleName : ""),
          " ",
          stopSpinner,
          moduleGpt
        );
      }
    } else if (moduleType[0] === "screen") {
      createScreen(toPascalCase(moduleName));
    } else if (moduleType[0] === "store") {
      createStore(moduleName);
    } else {
      process.exit(1);
    }

    break;
  }
};

export { selectModule };
