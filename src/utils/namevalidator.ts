import { createSpinner } from "nanospinner";
import { sleep } from "./helper";
const regex = new RegExp(/^[a-zA-Z]+$/);

/**
 * Validate folder name - only accept charecters
 * @param appname
 * @returns
 */

export async function validator(appname: string) {
  const waiting = createSpinner("validating Name...").start();
  await sleep();
  return new Promise((resolve, reject) => {
    if (!regex.test(appname)) {
      waiting.error({
        text: "Invalid Name - Please check the naming documentation 😥",
      });
      process.exit(1);
    } else {
      waiting.update({ text: `App name verified - ${appname} 👍🏻` }).success();
      resolve(true);
    }
  });
}
/**
 * Convert string to pascal case
 * @param name
 * @returns
 */
export function toPascalCase(name: any) {
  if (!regex.test(name)) {
    console.log(`${name} is not a valid name`);
    process.exit(1);
  } else {
    const UpdatedName = name.replace(
      /(\w)(\w*)/g,
      function (g0: any, g1: any, g2: any) {
        return g1.toUpperCase() + g2.toLowerCase();
      }
    );
    return UpdatedName;
  }
}
