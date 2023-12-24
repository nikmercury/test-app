Tested on iOS 16.4 and Android API 34

A lot of things here is unnecessary to complete the task at hand, but I considered it important to write the code as I would write if I were starting a new project.

For the same reason, I used @gorhom/bottom-sheet library here to create modals, because I think it is the best of all libraries for modals.

This is still not a full-fledged version of what I would write in a real project, so due to the lack of context and roadmap for this “project” I decided to omit some details. For example, I didn’t set rules for eslint and precommits, didn’t write tests, and didn’t sufficiently encapsulate some parts of the code.

If necessary, I can supplement this test task.

## Step 1: Start the Metro Server

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
