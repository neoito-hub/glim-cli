import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import fs from "fs";
import { supabase } from "./config";
import { intro, outro, spinner } from "@clack/prompts";
interface File {
  result: string[] | null;
  fileName: string | null;
}

export const getDataFromTable = async (fileName: string[]) => {
  intro("Wait. we are fetching the component");
  const spin = spinner();
  spin.start("Please wait");
  const name = fileName[2] ? fileName[2] : fileName[1];
  try {
    const { data: components, error } = await supabase
      .from("components")
      .select("*")
      .eq("c_name", fileName[1]);

    if (error || !components?.length) {
      spin.stop();
      outro("Sorry, we don't have this component in our directory");
      return;
    }

    const gistURLComponent = components[0].component_file;
    const gistURLStyle = components[0].style_file;
    const gistURLTest = components[0].test_file;
    const gitUrls = [gistURLComponent, gistURLStyle, gistURLTest];

    if (!gistURLComponent) {
      spin.stop();
      outro("Sorry, we don't have this component in our directory");
      return;
    }

    const configData = fs.readFileSync("glim.config.json", "utf8");
    const config = JSON.parse(configData);
    const folderPath = config?.path?.component
      ? `./${config.path.component}/${name}`
      : `./src/components/${name}`;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    await Promise.all(
      gitUrls.map(async (url) => {
        const gistID = url?.split("/").pop();
        const response = await axios.get(
          `https://api.github.com/gists/${gistID}`
        );
        const key = Object.keys(response?.data.files)[0];

        const regex = /(\.[^.]*$)/;
        const result: File["result"] = key.match(regex);
        const fileName: File["fileName"] = result ? name + result[0] : null;
        fs.writeFile(
          `${folderPath}/${fileName}`,
          response?.data.files[key].content,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      })
    );

    spin.stop("Thank you for waiting. File created");
    outro("Component created successfully");
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    outro("Error");
    throw error;
  }
};
