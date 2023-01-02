# Screen

In React Native, you would typically use screens/ folder and create all your component screens in there. Now if you are looking to create reusable components then you could create a components/ folder and place those particular components in there.So a good use case is maybe you want to have a UI that shows some cards with content to its users. You may have a screens/ImageScreen.js which represents the overall layout in which those Card items will sit, but then for each individual Card item that the user will scroll through inside that screen, it could be an individual component called Card.js or ImageDetail.js or whatever you wish, which sits inside of a components/ folder.

A non reuseable component which represent the overall layout are created inside screens.The components are reused inside the screens.

For creating each screen in glim project, you can use:

```bash
- npx glim-cli generate --screen [screen-name]
```

example

```bash
- npx glim-cli generate --screen LoginScreen
```

here in the above example the glim cli will create a screen named LoginScreen.


`glim generate --screen`command creates a folder with component name inside the`screen`folder in the `src` folder.

### It contains

- [component-name].screen.tsx
- [component-name].style.ts
- [component-name].tests.js

example

suppose that if we are creating a LoginScreen screen, all the above mentioned files will be created inside the LoginScreen screen.

- LoginScreen.screen.tsx
- LoginScreen.style.ts
- LoginScreen.tests.js