import { validator } from "../utils/Validator.js";
import chalk from "chalk";
import shell from "shelljs";
import * as fs from "fs";
import * as ejs from "ejs";
import printmessage from "print-message";
const componentTemplate = fs.readFileSync(
  "/Users/ajoalex/Documents/projects/rn-cli/src/template/component.tsx.ejs",
  "utf-8"
);
const styleTemplate = fs.readFileSync(
  "/Users/ajoalex/Documents/projects/rn-cli/src/template/componentStyle.ejs",
  "utf-8"
);
export async function createComponent(compname) {
  const component = ejs.render(componentTemplate, { props: compname });
  const style = ejs.render(styleTemplate, { props: compname });
  const validationStatus = await validator(compname);
  if (validationStatus) {
    fs.mkdir(compname, (err) => {
      if (err === null) {
        shell.cd(compname);
        shell.touch(`${compname}.component.tsx`);
        shell.touch(`${compname}.style.ts`);
        fs.writeFileSync(
          `/Users/ajoalex/Documents/projects/rn-cli/${compname}/${compname}.component.tsx`,
          component
        );
        fs.writeFileSync(
          `/Users/ajoalex/Documents/projects/rn-cli/${compname}/${compname}.style.ts`,
          style
        );
      } else {
        console.log(chalk.bgRed(err.message));
      }
    });
  } else {
    printmessage(
      [
        "Invalid Name Format",
        " ",
        "Name must only contain letters, ",
        "No Numbers , No special charecters",
      ],
      {
        borderColor: "red",
      }
    );
  }
}
