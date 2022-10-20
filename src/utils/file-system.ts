import * as fs from "fs";

/**
 * Create a new folder in root
 * @param dirname folder name to create
 */
const createfolder = async (dirname: string) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirname, (err) => {
      if (err) {
        console.log(err?.message);
        process.exit(1);
      } else {
        resolve(true);
      }
    });
  });
};

export { createfolder };
