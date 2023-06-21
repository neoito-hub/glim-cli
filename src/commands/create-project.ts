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
  initializeGit,
  createConfigFile,
} from "../utils/file-system";
import { intro, outro } from "@clack/prompts";

const createProject = async () => {
  intro("Creating a new Glim Project");
  // ask questions before creating a project
  const answers = await projectQuestions();

  // show decorated text in terminal before creating project
  // await startingProject();

  // Clone project from github
  await cloneProject(answers.appname, chooserepo());

  // Rename the cloned repo
  await renameProject(answers.appname, answers.packagename);

  // Install all the required dependencies - depends on user choice
  answers.installdependencies && (await installNodeModules(answers.appname));

  // Install all the required pods - depends on user choice
  // answers.installdependencies && (await await installPods(answers.appname));

  // Remove pre iniitailized git repo
  await miscSetup(answers.appname);

  // Initialize a new git repo - depends on user choice
  answers.initializegit && (await initializeGit(answers.appname));

  // Create a glim.config.js file in root folder
  await createConfigFile(answers);

  // Show success message
  await projectCreationCompleted(answers.appname);
  // outro("");
};
export { createProject };
