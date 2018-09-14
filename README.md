# AngularHttp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

==========================================================================================================
How does angular communicate with the server
Angular App (SPA) will send a request for which server will response  with JSON data
to the same ANgular App(note- we wont be getting new Page as response bcoz we r not reloading
the page, just changing the component in the SPA Page)
In background angular makes HTTP request using (Ajax calls)


------------------------------------------------------------------------------------------------------------
Backend as firebase
got to https://firebase.google.com/

Go TO CONSOLE > Add project
project name - ng-practice-http
(after project is created)
develop > Database
Create database > Test database
(after db is created)
Rules > (check u can read and write)
Go to Data tab > Database > RealtimeDatabase (click)
then u will be get the db url - https://ng-practice-http.firebaseio.com/

------------------------------------------------------------------------------------------------------------
