import * as fs from "fs";
import { zustandSliceTemplate } from "../../template/store";
import { checkFileExist } from "../../utils/file-system";

export const createZustandStore = async (storename: string) => {
  const SLICEROOT = "./src/store/slices";
  const SLICE = `${storename}slice.ts`;
  const slice = zustandSliceTemplate(storename);
  await checkFileExist([SLICEROOT], [SLICE]);
  fs.writeFile(`./src/store/slices/${storename}slice.ts`, slice, (err) => {
    !err && console.log(`Created ${storename}slice.ts in src/store/slices/`);
  });
};
