# Cdecbo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server for FrontEnd dev

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server for BackEnd dev

First create a compilation of production assets with `npm run build`
Then run `npm run devserver` for an express server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Deploy

- Connect via ssh to the server
- Get into cdecbo folder
- Pull the most recent changes
- Compile the assets with `npm run build`
- Run the server in the background `nohup node bin/www &`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
