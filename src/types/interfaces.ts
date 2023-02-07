export interface AppDetailsInterface {
  packagename: {
    value: string;
  };
  selectedStore: {
    value: "redux" | "zustand";
  };
  appname: {
    value: string;
  };
  initializegit: {
    value: boolean;
  };
  detox: {
    value: boolean;
  };
  fastlane: {
    value: boolean;
  };
  packagemanager: {
    value: "npm" | "yarn";
  };
  installdependencies: {
    value: boolean;
  };
}
