import * as fs from "fs";
import { createSagaStore } from "./subtasks/createSagaStore";
import { createZustandStore } from "./subtasks/createZustandStore";

type Configdata = {
  configurations?: {
    state_management: string;
  };
};

/**
 * Create a new store in the glim app
 * @param storename
 */
const createStore = async (storename: string) => {
  let configdata: Configdata = {};

  // * get configurations from glim.config file
  fs.readFile("./glim.config.json", (err, file) => {
    if (!err) {
      configdata = JSON.parse(file.toString());
      const store = configdata?.configurations?.state_management;
      store === "redux" && createSagaStore(storename);
      store === "zustand" && createZustandStore(storename);
    } else {
      console.log("Unable to read config file");
    }
  });
};
export { createStore };
