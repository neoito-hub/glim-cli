import ejs from "ejs";
import * as fs from "fs";
import { componentTemplate, styleTemplate } from "../template/component";
import { checkIfInsideProject } from "../utils/file-system";
import { validator } from "../utils/namevalidator";

const createComponent = async (compname: string) => {
  const component = componentTemplate(compname);
  const style = styleTemplate(compname);
  await validator(compname);
  await checkIfInsideProject();
  fs.mkdir(`./src/components/${compname}`, (err) => {
    if (!err) {
      fs.writeFile(
        `./src/components/${compname}/${compname}.component.tsx`,
        component,
        (err) => {
          !err &&
            console.log(
              `Created ${compname}.component.tsx in src/components/${compname}`
            );
        }
      );
      fs.writeFile(
        `./src/components/${compname}/${compname}.style.ts`,
        style,
        (err) => {
          !err &&
            console.log(
              `Created ${compname}.style.ts in src/components/${compname}`
            );
        }
      );
      const newline = `export { ${compname} } from './image/${compname}'`;
      fs.appendFile("./src/components/index.ts", newline + "\r\n", (err) => {
        if (err) {
          console.log("Unable to update index.ts file");
        }
      });
    } else {
      err?.code === "EEXIST" &&
        console.log(`Error: Component ${compname} already exist`);
    }
  });
};
export { createComponent };
