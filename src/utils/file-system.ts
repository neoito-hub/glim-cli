import * as fs from "fs";
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
