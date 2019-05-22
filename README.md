# HVAC System

## Background

This is a simple [lineman](http://linemanjs.com/) app that we use to practice some of the concepts of TDD in Javascript. We often use it to highlight some of the difficulties that you might encounter when you need to test around a third party API that you do not directly control.

This app contains no modern UI frameworks; your task is not to install a new framework like React but rather to work within the constraints that are given.

## Setup

Install the [Node Version Manager](https://github.com/nvm-sh/nvm). Mac users can use Homebrew:

```bash
brew install nvm
```

To configure nvm, add the following lines to your bash profile, for example, your .bashrc or .zshrc file in your home directory.

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```

These lines should have been printed to your terminal when `brew install nvm` completed. If you want to read the instructions again, run `brew info nvm`.

After saving the changes you will then need to reload your terminal so that nvm is on your path.  Navigate to the root of this directory and run:

```bash
nvm install  # Install the version of NodeJS stored in ".nvmrc" to the system
nvm use      # Activate the version of NodeJS in ".nvmrc"
npm install  # Install the required JS packages
```

Note that "nvm" controls the version of NodeJS that you are using while "npm" manages packages under that specific version.

## Testing

Tests are written with Jasmine and run with testem. You can find sample specs in `spec/environment-controller-spec.js`.

Run the continuous test suite with `npm test`. This will start a continuous tester but will not automatically recompile the javascript on changes. For that you should open a second terminal and simultaneously run `npm start`.

## Building and Running the App

Start the app with `npm start`. It will be running on `localhost:8000`.

If you want to run the app in a production-like state (i.e. clean, build, and run on express.js), you can use the command `npm run production`.

The app uses [underscore](https://underscorejs.org/#template) templates which are found in `app/templates` and loaded into the `JST` object. You can look at `app/js/environment-controller.js` to see how it works and at the Lineman docs for specifics.
