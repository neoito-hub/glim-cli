const regex = new RegExp(/^[a-zA-Z]+$/);
export function validator(appname: string) {
  return new Promise((resolve, reject) => {
    if (!regex.test(appname)) {
      console.log("invalid name format");
      process.exit(1);
    } else {
      resolve(true);
    }
  });
}
