# HVAC System

## Background

This is a simple [lineman](http://linemanjs.com/) app that we use to practice some of the concepts of TDD in Javascript. We often use it to highlight some of the difficulties that you might encounter when you need to test around a third party API that you do not directly control.

This app contains no modern UI frameworks; your task is not to install a new framework like React but rather to work within the constraints that are given.

## Setup

Install the [Node Version Manager](https://github.com/nvm-sh/nvm). Mac users can use Homebrew:

```
brew install nvm
```

Navigate to the root of this directory and run:

```
nvm use
nvm install
npm install
```

Note that "nvm" controls the version of NodeJS that you are using while "npm" manages packages under that specific version.

## Testing

Tests are written with Jasmine and run with testem. You can find sample specs in `spec/environment-controller-spec.js`.

Run the continuous test suite with `npm test`. This will start a continuous tester but will not automatically recompile the javascript on changes. For that you should open a second terminal and simultaneously run `npm start`.

## Building and Running the App

Start the app with `npm start`. It will be running on `localhost:8000`.

If you want to run the app in a production-like state (i.e. clean, build, and run on express.js), you can use the command `npm run production`.

The app uses [underscore](https://underscorejs.org/#template) templates which are found in `app/templates` and loaded into the `JST` object. You can look at `app/js/environment-controller.js` to see how it works and at the Lineman docs for specifics.
