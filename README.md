
<p align="center">
    <img src="./public/Glim.png" alt="glim logo">
</p>
<h1  align="center"> The Next Generation React Native CLI  </h1>

[![npm version](https://badge.fury.io/js/glim-cli.svg)](https://badge.fury.io/js/glim-cli)
![example workflow](https://github.com/neoito-hub/glim-cli/actions/workflows/release.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Generic badge](https://img.shields.io/badge/PRs-WELCOME-<COLOR>.svg)](https://shields.io/)

## React Native Latest Architecture CLI along with a fully tested boilerplate, component/screen generators, and more! 🎉

# Glim Boilerplate

Glim boilerplate includes with different set of libraries, so you can just start coding without doing any configurations.

<table>
  <tr>
    <td>
      <b>Library</b>
    </td>
    <td>
      <b>Description</b>
    </td>
  </tr>
  <tr>
    <td>React Native</td>
    <td>The best cross-platform mobile framework</td>
  </tr>
  <tr>
    <td>React</td>
    <td>JavaScript library for building user interfaces</td>
  </tr>
  <tr>
    <td>Typescript</td>
    <td>Static Typechecker</td>
  </tr>
  <tr>
    <td>Tailwind</td>
    <td>CSS framework for styling</td>
  </tr>
  <tr>
    <td>React Navigation</td>
    <td>Routing and navigating between multiple components</td>
  </tr>
  <tr>
    <td>RN Reanimated</td>
    <td>
      Provides an API that greatly simplifies the process of creating smooth,
      powerful, and maintainable animations
    </td>
  </tr>
  <tr>
    <td>AsyncStorage</td>
    <td>Asynchronous, persistent, key-value storage system</td>
  </tr>
  <tr>
    <td>Flipper</td>
    <td>React Native Debugger</td>
  </tr>
  <tr>
    <td>Jest</td>
    <td>JavaScript testing framework</td>
  </tr>
</table>

# Folder Structure

- `index.js`- The main entry point of application. It is equivalent to React on the web mounting the project to the root DOM node
- `/android and /ios `- The folders where all the native code lives. If we needed to add or edit any platform specific native code, this is where we'd have to look. We also need to go into these folders if we have to install any native libraries
- `.prettierrc.js` - Code formatter which is again optional, but you can read more about it in our code style chapter
- `/src` - Base folder which will store all the necessary folders or files
  - `/components` - Where all the reusable components inside the project resides
  - `/config` - Contains all the configurations of the project
  - `/hooks` - Contains all the custom hooks inside the project
  - `/navigation` - Conatains all the navigations
  - `/redux` - Contains all the redux components such as store, saga and slice
  - `/screens` - Contains all the screens inside the project
  - `/utils` - Storing reusable methods

# Quick Start

## Create new React Native Project

To create new glim project, you can use

```bash
npx glim create-app [app-name]
```

Once's it running, it will create a new glim project with corresponding name along with typical folders and configuration files.

## Create new Component

```bash
npx glim generate --component [component-name]
```

## Create new Screen

```bash
npx glim generate --screen [screen-name]
```

## Create new Redux components

```bash
npx glim generate --store [component-name]
```

# Contributors

![GitHub Contributors Image](https://contrib.rocks/image?repo=neoito-hub/glim-cli)

