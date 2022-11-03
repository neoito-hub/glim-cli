import ejs from "ejs";
import * as fs from "fs";
import { componentTemplate, styleTemplate } from "../template/component";

const createComponent = async (compname: string) => {
  const component = componentTemplate(compname);
  const style = styleTemplate(compname);
  fs.mkdir(`./src/components/${compname}`, (err) => {
    if (!err) {
      fs.writeFileSync(
        `./src/components/${compname}/${compname}.component.tsx`,
        component
      );
      fs.writeFileSync(
        `./src/components/${compname}/${compname}.style.ts`,
        style
      );
    } else {
      console.log(err);
    }
  });
};
export { createComponent };
