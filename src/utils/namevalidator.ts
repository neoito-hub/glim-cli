import { createSpinner } from "nanospinner";
const regex = new RegExp(/^[a-zA-Z]+$/);

/**
 * Validate folder name - only accept charecters
 * @param appname
 * @returns
 */
export function validator(appname: string) {
  const waiting = createSpinner("validating Name").start();
  return new Promise((resolve, reject) => {
    if (!regex.test(appname)) {
      waiting.error();
      console.log(
        "Invalid Name - Name must be include charecters. No digits and special charecters allowed"
      );
      process.exit(1);
    } else {
      waiting.success();
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
  const UpdatedName = name.replace(
    /(\w)(\w*)/g,
    function (g0: any, g1: any, g2: any) {
      return g1.toUpperCase() + g2.toLowerCase();
    }
  );
  return UpdatedName;
}
