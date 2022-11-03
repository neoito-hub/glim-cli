import ejs from "ejs";
import * as fs from "fs";
import { componentTemplate, styleTemplate } from "../template/component";
import { validator } from "../utils/namevalidator";

const createComponent = async (compname: string) => {
  const component = componentTemplate(compname);
  const style = styleTemplate(compname);
  await validator(compname);
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
    } else {
      err?.code === "EEXIST" &&
        console.log(`Error: Component ${compname} already exist`);
    }
  });
};
export { createComponent };
