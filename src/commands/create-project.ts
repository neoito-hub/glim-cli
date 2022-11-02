import { projectCreated, projectQuestions } from "../utils/decorations";
import {
  cloneProject,
  installNodeModules,
  installPods,
  miscSetup,
  renameProject,
} from "../utils/file-system";
import { toPascalCase, validator } from "../utils/namevalidator";

const createProject = async (appname: any) => {
  const packagename = await projectQuestions();
  await validator(appname);
  await cloneProject(appname);
  await renameProject(appname, packagename);
  await installNodeModules(appname);
  await installPods(appname);
  await miscSetup(appname);
  projectCreated();
};
export { createProject };
