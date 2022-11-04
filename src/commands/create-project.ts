import { projectCreated, projectQuestions } from "../utils/decorations";
import {
  installNodeModules,
  installPods,
  renameProject,
  setProject,
} from "../utils/file-system";
import { validator } from "../utils/namevalidator";

const createProject = async (appname: any) => {
  const packagename = await projectQuestions();
  await validator(appname);
  await setProject(appname);
  await renameProject(appname, packagename);
  await installNodeModules(appname);
  await installPods(appname);
  projectCreated();
};
export { createProject };
