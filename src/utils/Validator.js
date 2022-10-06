const regex = new RegExp(/^[a-zA-Z]+$/);
export function validator(appname) {
  return new Promise((resolve, reject) => {
    return resolve(regex.test(appname));
  });
}
