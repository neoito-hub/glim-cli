import figlet from "figlet";
import gradient from "gradient-string";

async function projectCreated() {
  figlet.text(
    "Glim CLI",
    {
      font: "3D-ASCII",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(gradient.instagram.multiline(data));
      console.log(
        "React Native Latest Architecture CLI along with a fully tested boilerplate, component/screen generators, and more! 🎉"
      );
    }
  );
}
export { projectCreated };
