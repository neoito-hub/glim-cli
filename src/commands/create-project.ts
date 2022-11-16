import { startingProject, projectQuestions } from "../utils/decorations";
import {
  installNodeModules,
  installPods,
  renameProject,
  setProject,
  cloneProject,
} from "../utils/file-system";
import { validator } from "../utils/namevalidator";

const createProject = async (appname: any) => {
  await startingProject();
  const answers = await projectQuestions();
  // answers?.selectedStore === undefined && process.exit(1);
  await validator(appname);
  answers?.selectedStore === "redux" && (await setProject(appname));
  answers?.selectedStore === "zustand" && (await cloneProject(appname));
  await renameProject(appname, answers?.packagename);
  await installNodeModules(appname);
  await installPods(appname);
};
export { createProject };
