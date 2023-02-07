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
  // ask questions before creating a project
  const answers = await projectQuestions();

  // show decorated text in terminal before creating project
  await startingProject();

  // Clone project from github
  await cloneProject(
    answers.appname.value,
    chooserepo(answers.selectedStore.value)
  );

  // Rename the cloned repo
  await renameProject(answers.appname.value, answers.packagename.value);

  // Install all the required dependencies - depends on user choice
  answers.installdependencies.value &&
    (await installNodeModules(answers.appname.value));

  // Install all the required pods - depends on user choice
  answers.installdependencies.value &&
    (await await installPods(answers.appname.value));

  // Remove pre iniitailized git repo
  await miscSetup(answers.appname.value);

  // Initialize a new git repo - depends on user choice
  answers.initializegit.value && (await initializeGit(answers.appname.value));

  // Create a glim.config.js file in root folder
  await createConfigFile(answers);

  // Show success message
  await projectCreationCompleted(answers.appname.value);
};
export { createProject };
