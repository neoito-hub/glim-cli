import { projectCreated } from "../utils/decorations";
import { cloneProject, installNodeModules } from "../utils/file-system";
import { validator } from "../utils/namevalidator";

const createProject = async (appname: any) => {
  await validator(appname);
  await cloneProject(appname);
  await installNodeModules(appname);
  projectCreated();
};
export { createProject };
