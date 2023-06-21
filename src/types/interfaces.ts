export interface AppDetailsInterface {
  packagename: string;
  appname: string;
  initializegit: boolean;
  packagemanager: "npm" | "yarn";
  installdependencies: boolean;
}
