const os = process.platform;

const filecopy =
  (os === "win32" && "copy") ||
  (os === "darwin" && "cp -r") ||
  (os === "linux" && "cp -r") ||
  "cp -r";

// project seed repo urls
const chooserepo = () => {
  // if (storename === "redux") {
  //   return "https://github.com/Glim-House/glim-boilerplate-redux-saga.git";
  // } else if (storename === "zustand") {
  //   return "https://github.com/Glim-House/glim-boilerplate-zustand.git";
  // } else {
  //   console.log("no repo found");
  //   process.exit(1);
  // }
  return "https://github.com/Glim-House/GlimBoilerplate";
};
export { filecopy, chooserepo };
