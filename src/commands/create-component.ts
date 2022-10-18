import ejs from "ejs";
import * as fs from "fs";
import appRootPath from "app-root-path";
import { validator } from "../utils/namevalidator";
import shell from "shelljs";
const componentTemplate = fs.readFileSync(
  `${appRootPath.path}/src/template/component.tsx.ejs`,
  "utf-8"
);
const styleTemplate = fs.readFileSync(
  `${appRootPath.path}/src/template/componentStyle.ejs`,
  "utf-8"
);
/**
 * create component in project folder
 * @param componentName
 */
const createComponent = async (componentName: string) => {
  const component = ejs.render(componentTemplate, { props: componentName });
  const style = ejs.render(styleTemplate, { props: componentName });
  const validationStatus = await validator(componentName);
  if (validationStatus) {
    fs.mkdir(componentName, (err) => {
      if (err === null) {
        shell.cd(componentName);
        shell.touch(`${componentName}.component.tsx`);
        shell.touch(`${componentName}.style.ts`);
        fs.writeFileSync(
          `${appRootPath}/${componentName}/${componentName}.component.tsx`,
          component
        );
        fs.writeFileSync(
          `${appRootPath}/${componentName}/${componentName}.style.ts`,
          style
        );
      }
    });
  }
};
export { createComponent };
