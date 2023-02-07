import * as fs from "fs";
import { zustandSliceTemplate } from "../../template/store";
import { checkFileExist } from "../../utils/file-system";

/**
 * Create a new zustand store
 * @param storename
 */
export const createZustandStore = async (storename: string) => {
  const SLICEROOT = "./src/store/slices";
  const SLICE = `${storename}slice.ts`;
  const slice = zustandSliceTemplate(storename);
  await checkFileExist([SLICEROOT], [SLICE]);

  // create a new slice
  fs.writeFile(`./src/store/slices/${storename}slice.ts`, slice, (err) => {
    !err && console.log(`Created ${storename}slice.ts in src/store/slices/`);
  });

  // update store file
  fs.readFile("./src/store/store.ts", (err, file) => {
    if (!err) {
      const outFILE = file.toString();
      let finalOut =
        outFILE.slice(0, outFILE.indexOf("store = (...a) => ({") + 20) +
        ` \n\r ...${storename}Slice(...a), ` +
        outFILE.slice(outFILE.indexOf("store = (...a) => ({") + 20);
      finalOut =
        `import { ${storename}Slice } from './slices/${storename}Slice' \n` +
        finalOut;
      fs.writeFile("./src/store/store.ts", finalOut, (err) => {
        if (!err) {
          console.log("Root Store updated");
        }
      });
    } else {
      console.log(err);
    }
  });
};
