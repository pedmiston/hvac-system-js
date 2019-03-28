# My Lineman Application

## Requirements

1. Keep the room temperature before 65 and 75 degrees at all times.
1. If you want to heat the room, you need to turn on both the fan and the heater.
1. If you want to cool the room, you need to turn on both the fan and the cooler.

## Constraints

1. The thermostat has a lot of lag meaning that you can take an action once per minute. Any faster and it will explode.
1. After the heater is turned off, the fan stalls. You can't turn on the fan for five minutes after the heat is turned off or it will explode.
1. After the cooler is turned off, the fan stalls. You can't turn on the fan for three minutes after the cooler is turned off or it will explode.
1. It is dangerous to turn the heater or cooler without the fan. They will explode...

## Setup

1. Make sure that you have npm installed on your system
1. Run `npm install` to install all of the necessary packages

## Testing

Start the app with `npm start`. It will be running at localhost:8000.

Run the specs in CI with `npm test`.

Run the continuous specs with `npm run spec`. This will start a continuous tester but will not automatically recompile the javascript on changes. For that you should open a second terminal and simultaneously run `npm start`.

## Structure

This app is a very simple [lineman](http://linemanjs.com/) app. It contains no UI frameworks, and your first task is not to install React but to work within the constraints that are given.

Tests are run with [testem](https://github.com/testem/testem), and written with [Jasmine](https://jasmine.github.io/). You can find the first test in `spec/hello-spec.js`. It's currently using Jasmine-Given, but you don't have to use it. The template uses [underscore](https://underscorejs.org/#template) templates (and has underscore available) which are found in the `templates` and loaded into the `JST` object. You can look at `hello.js` to see how it works and at the Lineman docs for specifics.
