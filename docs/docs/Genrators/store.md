# Store

We use store for managing global states,a data that can be accessed anywhere inside our project.
A store is one among the main pillar of a project.
Here in glim we are using `redux-saga` for store management.
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience
For further details about [`redux-saga`](https://redux.js.org/introduction/getting-started).

For creating a new store in glim project, you can use:

```bash
- npx glim-cli generate --store [component-name]
```

The command above will create a folder `store` inside which there will be 3 more subfolders `actions`, `slices` and `sagas`.
Inside the subfolders there will be corresponding files for actions, slices and sagas respectively.