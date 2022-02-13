# Devices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Running the nodejs api project.

Please first run the nodejs api project with 'node index.js' Angular Project devices will fetch api response from localhost:3000

## Use Cases Answers:
Answer the questions from the testing perspective

Answer: I would prefer the Style#1. Because from a developer's perspective, it will be easy for me to undestand the work flow and make decisions based on that.
I would not choose the Style#2 beacuse ensuring everything will not be enough in order to make the application robust and portable.
The tests that I think we should run are 
1. Home page displays all devices
2. Search bar is functional as required
3. On Clicking the device, it redirects to detail page with it's details.
4. Clicking on Cancel, removes the search options shown
5. Search Bar is non functional on the device detail page
