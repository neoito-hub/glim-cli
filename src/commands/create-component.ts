import ejs from "ejs";
import * as fs from "fs";
import appRootPath from "app-root-path";
import { validator } from "../utils/namevalidator";
import shell from "shelljs";
import { createSpinner } from "nanospinner";

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
  const spinner = createSpinner("creating component").start();
  const component = ejs.render(componentTemplate, { props: componentName });
  const style = ejs.render(styleTemplate, { props: componentName });
  const validationStatus = await validator(componentName);
  if (validationStatus) {
    fs.mkdir(
      `${appRootPath}/testapp/src/components/${componentName}`,
      (err) => {
        if (err === null) {
          fs.writeFileSync(
            `${appRootPath}/src/components/${componentName}/${componentName}.component.tsx`,
            component
          );
          fs.writeFileSync(
            `${appRootPath}/src/components/${componentName}/${componentName}.style.ts`,
            style
          );
          spinner.success();
        } else {
          spinner.error();
          console.log(err);
        }
      }
    );
  } else {
    spinner.error();
  }
};
export { createComponent };
