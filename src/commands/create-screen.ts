import * as fs from "fs";
import { screenTemplate, styleTemplate } from "../template/screen";

/**
 * create a new screen in glim project
 * @param screenname
 */
const createScreen = async (screenname: string) => {
  const screen = screenTemplate(screenname);
  const style = styleTemplate(screenname);

  fs.mkdir(`./src/screens/${screenname}`, { recursive: true }, (err) => {
    if (!err) {
      fs.writeFile(
        `./src/screens/${screenname}/${screenname}.screen.tsx`,
        screen,
        (err) => {
          !err &&
            console.log(
              `Created ${screenname}.screen.tsx in src/screens/${screenname}`
            );
        }
      );
      fs.writeFile(
        `./src/screens/${screenname}/${screenname}.style.ts`,
        style,
        (err) => {
          !err &&
            console.log(
              `Created ${screenname}.style.ts in src/screen/${screenname}`
            );
        }
      );
    } else {
      err?.code === "EEXIST" &&
        console.log(`Error: Screen ${screenname} already exist`);
    }
  });
};
export { createScreen };
