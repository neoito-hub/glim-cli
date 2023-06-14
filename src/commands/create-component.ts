import fs from "fs";
import {
  componentTemplate,
  styleTemplate,
  testTemplate,
} from "../template/component";
import { openai } from "../openai/config";
import { spinner } from "@clack/prompts";

interface SpinnerCallback {
  (): void;
}
/**
 * Create a new component in the glim project.
 * @param compname
 */

const createComponent = async (
  compname: string,
  componentDescription: string,
  stopSpinner: SpinnerCallback
) => {
  const s = spinner();
  function fileWriting(params: string[]) {
    const componentPath = `./src/components/${compname}`;
    fs.mkdir(componentPath, (err) => {
      if (!err) {
        const fileNames = ["screen.tsx", "style.ts", "test.tsx"];
        fileNames.forEach((fileName, index) => {
          fs.writeFile(
            `${componentPath}/${compname}.${fileName}`,
            params[index],
            (err) => {
              if (err) {
                console.log(err);
              }
            }
          );
        });
      } else {
        if (err.code === "EEXIST") {
          console.log(`Error: Screen ${compname} already exists`);
        }
      }
    });
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `  Create a reusable React Native component named ${compname} in TypeScript.
          The component should have separate files for the main logic, styles, and tests.
          Each file should be wrapped within three backticks.
          The component is about :
          ${componentDescription} `,
        },
      ],
    });

    const data = completion?.data?.choices[0]?.message?.content;
    const string = data?.toString();
    const regex = /```([\s\S]*?)```/g;
    const matches = string?.match(regex);


    if (matches) {
      const files = matches.map((element) => {
        const content = element.replace(/```/g, "");
        const regexPattern = /(.*import[\s\S]*\n[\s\S]*\n)/;
        const extractedContents = content.match(regexPattern);
        return extractedContents ? extractedContents[0] : "";
      });

      fileWriting(files);

    } else {
      const defaultFiles: string[] = [
        componentTemplate(compname),
        styleTemplate(compname),
        testTemplate(compname),
      ];
      fileWriting(defaultFiles);
    }

    stopSpinner();

  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

export { createComponent };
