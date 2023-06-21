import fs from "fs";
import { text, isCancel, cancel, intro, outro, spinner } from "@clack/prompts";

const addProject = async () => {
  intro("Adding glim to your project");

  try {
    const appConfigPath = "./app.json";
    const appConfig = JSON.parse(
      await fs.promises.readFile(appConfigPath, "utf8")
    );
    const appName = appConfig.name;
    const filePath = "glim.config.json";
    const defaultPath = "src/components";
    const spin = spinner();
    if (!fs.existsSync(filePath)) {
      const configData = {
        appname: appName,
        version: "1.0",
        path: {
          component: defaultPath,
        },
      };
      await fs.promises.writeFile(
        filePath,
        JSON.stringify(configData, null, 2),
        "utf8"
      );
    }

    const data = await fs.promises.readFile(filePath, "utf8");
    const jsonContent = await JSON.parse(data);
    if (!fs.existsSync(defaultPath)) {
      const userPath = await text({
        message: "Enter your component folder path",
        placeholder: "src/components",
      });

      if (isCancel(userPath)) {
        cancel("Operation cancelled.");
        process.exit(0);
      }

      await fs.promises.mkdir(userPath, {
        recursive: true,
      });
      jsonContent.path = {
        component: userPath,
      };
      await fs.promises.writeFile(
        filePath,
        JSON.stringify(jsonContent, null, 2),
        "utf8"
      );
    }
    spin.start("Please bear with us as we set up glim for your project");
    setTimeout(() => {
      spin.stop("glim setup has been completed successfully.");
      outro("Added glim to your project successfully.");
    }, 4000);
  } catch (error) {
    console.error(error);
  }
};

export { addProject };
