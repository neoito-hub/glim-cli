// import ejs from "ejs";
// import * as fs from "fs";
// import appRootPath from "app-root-path";
// import { validator } from "../utils/namevalidator";
// import shell from "shelljs";
// const componentTemplate = fs.readFileSync(
//   `${appRootPath.path}/src/template/screen.tsx.ejs`,
//   "utf-8"
// );
// const styleTemplate = fs.readFileSync(
//   `${appRootPath.path}/src/template/screenStyle.ejs`,
//   "utf-8"
// );
// /**
//  * create screen in project folder
//  * @param screenName
//  */
// const createScreen = async (screenName: string) => {
//   const component = ejs.render(componentTemplate, { props: screenName });
//   const style = ejs.render(styleTemplate, { props: screenName });
//   const validationStatus = await validator(screenName);
//   if (validationStatus) {
//     fs.mkdir(screenName, (err) => {
//       if (err === null) {
//         shell.cd(screenName);
//         shell.touch(`${screenName}.screen.tsx`);
//         shell.touch(`${screenName}.style.ts`);
//         fs.writeFileSync(
//           `${appRootPath}/${screenName}/${screenName}.screen.tsx`,
//           component
//         );
//         fs.writeFileSync(
//           `${appRootPath}/${screenName}/${screenName}.style.ts`,
//           style
//         );
//       }
//     });
//   }
// };
// export { createScreen };
