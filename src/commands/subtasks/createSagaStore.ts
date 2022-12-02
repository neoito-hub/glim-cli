import * as fs from "fs";
import { sagaTemplate, sliceTemplate } from "../../template/store";
import { checkFileExist } from "../../utils/file-system";

/**
 * Create a new saga store in the glim project
 * @param storename
 */
export const createSagaStore = async (storename: string) => {
  const SAGAROOT = "./src/redux/sagas/";
  const SLICEROOT = "./src/redux/slices/";
  const SAGA = `${storename}.saga.ts`;
  const SLICE = `${storename}.slice.ts`;
  const saga = sagaTemplate(storename);
  const slice = sliceTemplate(storename);
  await checkFileExist([SAGAROOT, SLICEROOT], [SAGA, SLICE]);

  // create a new saga file
  fs.writeFile(`./src/redux/sagas/${storename}.saga.ts`, saga, (err) => {
    !err &&
      console.log(
        `Created ${storename}.saga.ts in src/redux/sagas/${storename}`
      );
  });

  // create a new slice file
  fs.writeFile(`./src/redux/slices/${storename}.slice.ts`, slice, (err) => {
    !err &&
      console.log(
        `Created ${storename}.slice.ts in src/redux/slices/${storename}`
      );
  });

  // updating root reducer
  fs.readFile("./src/redux/store/root.reducer.ts", (err, file) => {
    if (!err) {
      const outFILE = file.toString();
      let finalOut =
        outFILE.slice(0, outFILE.indexOf("combineReducers({") + 17) +
        `\n\r\t ${storename} : ${storename}Slice.reducer,` +
        outFILE.slice(outFILE.indexOf("combineReducers({") + 17);
      finalOut =
        `import { ${storename}Slice } from '../slices/${storename}.slice' \n` +
        finalOut;
      fs.writeFile("./src/redux/store/root.reducer.ts", finalOut, (err) => {
        if (!err) {
          console.log("Root Reducer updated");
        }
      });
    } else {
      console.log(err);
    }
  });

  // updating root saga
  fs.readFile("./src/redux/store/root.saga.ts", (err, file) => {
    if (!err) {
      const outFILE = file.toString();
      let finalOut =
        outFILE.slice(0, outFILE.indexOf("yield all([") + 11) +
        `${storename}Saga(),` +
        outFILE.slice(outFILE.indexOf("yield all([") + 11);
      finalOut =
        `import { ${storename}Saga } from '../sagas/${storename}.saga' \n` +
        finalOut;
      fs.writeFile("./src/redux/store/root.saga.ts", finalOut, (err) => {
        if (!err) {
          console.log("Root saga updated");
        }
      });
    } else {
      console.log(err);
    }
  });
};
