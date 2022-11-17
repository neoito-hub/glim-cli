import * as fs from "fs";
import { checkIfInsideProject, checkFileExist } from "../utils/file-system";
import { validator } from "../utils/namevalidator";
import { createSagaStore } from "./subtasks/createSagaStore";
import { createZustandStore } from "./subtasks/createZustandStore";

const createStore = async (storename: string) => {
  let configdata = {};
  await validator(storename);
  await checkIfInsideProject();
  fs.readFile("./glim.config.json", (err, file) => {
    if (!err) {
      configdata = JSON.parse(file.toString());
      const store = configdata.configurations.state_management;
      store === "redux" && createSagaStore(storename);
      store === "zustand" && createZustandStore(storename);
    } else {
      console.log("Unable to read config file");
    }
  });
};
export { createStore };
