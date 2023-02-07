import { system } from "gluegun";
import { execSync } from "node:child_process";

/**
 * check system versions
 * node version, npm version, ruby installed
 * @returns
 */
const checkversions = async () => {
  return new Promise((resolve, reject) => {
    const nodeversion: number = Number(process.version.at(2)) || 0;
    const packagemanager: string =
      (Boolean(system.which("yarn")) && "yarn") ||
      (Boolean(system.which("npm")) && "npm") ||
      "";
    const os = process.platform;
    if (nodeversion < 5) {
      console.log("Incombatible node version. Requires 15 or more...");
      process.exit(1);
    } else if (packagemanager === "") {
      console.log("Please install npm/yarn");
      process.exit(1);
    } else if (os === "darwin") {
      try {
        const something = execSync("ruby -v");
        // console.log(something.toString("utf-8"));
        resolve(packagemanager);
      } catch (error: any) {
        console.log("ruby not found");
        // console.log(error.toString("utf-8"));
        process.exit(1);
      }
    } else {
      console.log("succes");
      resolve(packagemanager);
    }
  });
};
const getPackageManager = () => {
  return (
    (Boolean(system.which("yarn")) && "yarn") ||
    (Boolean(system.which("npm")) && "npm") ||
    "npm"
  );
};
export { checkversions, getPackageManager };
