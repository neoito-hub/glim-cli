import { chooserepo } from "../constants/system";
import { AppDetailsInterface } from "../types/interfaces";
import {
  startingProject,
  projectQuestions,
  projectCreationCompleted,
} from "../utils/decorations";
import {
  installNodeModules,
  installPods,
  renameProject,
  cloneProject,
  miscSetup,
  createConfigFile,
} from "../utils/file-system";
import { validator } from "../utils/namevalidator";

const createProject = async (appname: any) => {
  await startingProject();
  const answers: AppDetailsInterface = await projectQuestions(appname);
  await validator(appname);
  await cloneProject(appname, chooserepo(answers?.selectedStore));
  await renameProject(appname, answers?.packagename);
  await installNodeModules(appname);
  await installPods(appname);
  await miscSetup(appname);
  await createConfigFile(answers);
  await projectCreationCompleted(appname);
};
export { createProject };
