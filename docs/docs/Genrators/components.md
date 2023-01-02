# Component

 Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of creating components in glim cli, which is very easy and making a good developer experience.

For creating a component in glim, you can use:

```bash
- npx glim-cli generate --component [component-name]
```

example

```bash
- npx glim-cli generate --component searchBar
```

here in the above example the glim cli will create a component named searchBar.

`glim generate --component`command creates a folder with component name inside the `components`folder in the `src` folder.


### It contains

inside the component folder the items that are usually added are .tsx file where we create the component, .ts file for styling the component and tests.js file for unit testing.

- [component-name].component.tsx
- [component-name].style.ts
- [component-name].tests.js
- [component-name].stories.js


example

suppose that if we are creating a searchBar component, all the above mentioned files will be created inside the searchBar component.

- searchBar.component.tsx
- searchBar.style.ts
- searchBar.tests.js
- searchBar.stories.ts