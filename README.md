# rn-video-onLoad-bug

For all steps make sure you are inside the ReproducerApp

```bash
cd ReproducerApp
```

## Step 1: Install dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

First, make sure you install dependencies with:

```bash
cd ios && bundle install && bundle exec pod install
```

Then you can run the iOS app with:

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

