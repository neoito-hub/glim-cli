const os = process.platform;

const filecopy =
  (os === "win32" && "copy") ||
  (os === "darwin" && "cp -r") ||
  (os === "linux" && "cp -r") ||
  "cp -r";

const chooserepo = (storename: "redux" | "zustand" | "") => {
  if (storename === "redux") {
    return "https://github.com/Glim-House/glim-boilerplate-redux-saga.git";
  } else if (storename === "zustand") {
    return "https://github.com/Glim-House/glim-boilerplate-zustand.git";
  } else {
    console.log("no repo found");
    process.exit(1);
  }
};
export { filecopy, chooserepo };
