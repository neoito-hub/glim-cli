const os = process.platform;

const filecopy =
  (os === "win32" && "copy") ||
  (os === "darwin" && "cp -r") ||
  (os === "linux" && "cp -r") ||
  "cp -r";

export { filecopy };
