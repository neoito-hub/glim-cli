---
sidebar_position: 2
---
# Getting Started

To create new glim project, you can use :

```bash
- npx glim-cli create-app [app-name]
```

Once's it running, it will create a new glim project with corresponding name along with typical folders and configuration files.

## Folder Structure

- `index.js` - The main entry point of application. It is equivalent to React on the web mounting the project to the root DOM node
- `/android and /ios` - The folders where all the native code lives. If we needed to add or edit any platform specific native code, this is where we'd have to look. We also need to go into these folders if we have to install any native libraries
- `.prettierrc.js` - Code formatter which is again optional, but you can read more about it in our code style chapter
- `/src` - Base folder which will store all the necessary folders or files
- `/components` - Where all the reusable components inside the project resides
- `/config` - Contains all the configurations of the project
- `/hooks` - Contains all the custom hooks inside the project
- `/navigation` - Conatains all the navigations
- `/redux `- Contains all the redux components such as store, saga and slice
- /screens` - Contains all the screens inside the project
- `/utils` - Storing reusable methods

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
