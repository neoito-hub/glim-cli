import { chooserepo } from "../constants/system";
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
  initializeGit,
} from "../utils/file-system";

const createProject = async () => {
  const answers = await projectQuestions();
  await startingProject();
  await cloneProject(
    answers.appname.value,
    chooserepo(answers.selectedStore.value)
  );
  await renameProject(answers.appname.value, answers.packagename.value);
  answers.installdependencies.value &&
    (await installNodeModules(answers.appname.value));
  answers.installdependencies.value &&
    (await await installPods(answers.appname.value));
  await miscSetup(answers.appname.value);
  answers.initializegit.value && (await initializeGit(answers.appname.value));
  await createConfigFile(answers);
  await projectCreationCompleted(answers.appname.value);
};
export { createProject };
