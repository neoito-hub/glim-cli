import ejs from "ejs";
import * as fs from "fs";

const component = ejs.render('<%= people.join(", "); %>', {
  people: ["geddy", "neil", "alex"],
});
const style = ejs.render('<%= people.join(", "); %>', {
  people: ["geddy", "neil", "alex"],
});
const createComponent = (compname: string) => {
  fs.mkdir(`./src/components/${compname}`, (err) => {
    if (!err) {
      fs.writeFileSync(
        `./src/components/${compname}/${compname}.component.tsx`,
        component
      );
      fs.writeFileSync(
        `./src/components/${compname}/${compname}.style.ts`,
        style
      );
    } else {
      console.log(err);
    }
  });
};
export { createComponent };
