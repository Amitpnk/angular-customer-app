# angular-customer-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Run below command 
`ng server` for development  
`ng build` for building the project  
`ng test` for executing unit tests  

## Table of Contents

- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Main Available Scripts](#available-scripts)
    - [ng serve](#ng-serve)
    - [ng build](#ng-build)
    - [ng test](#ng-test)
-  Sample application with each labs
    - [Lab 1 - npm example](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab01/npm-example)
    - [Lab 2 - Creating component and model](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab02/CustomerApplication)
    - [Lab 3 - Angular Routing - Creating Master page and Navigators](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab03/CustomerApplication)
    - [Lab 4 - Implementing lazy loading and increase the performance of the application](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab04/CustomerApplication)
    - [Lab 5 - Validation using Angular validation framework](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab05/CustomerApplication)
    - [Lab 6 - Dependency Injection](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab06/CustomerApplication)
    - [Lab 7 - Input / Output and Event Emitters](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab07/CustomerApplication)
    - [Lab 8 - HTTP call in Angular](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab8/CustomerApplication)
    - [Lab 9 - Services](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab07/CustomerApplication)
    - [Lab 10 - Implementing pipes](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab7/CustomerApplication)
    - [Lab 11 - Angular Component Cycle](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab7/CustomerApplication)
    - [Lab 12 - jQuery integration with Angular](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab7/CustomerApplication)
    - [Lab 13 - Unit testing with Angular](https://github.com/Amitpnk/angular-customer-app/tree/master/Lab7/CustomerApplication)
    
## About Angular application

Angular is a declarative JavaScript framework to simply JavaScript code

In our applicatin, we generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

AngularJS was originally developed in 2009 by Miško Hevery and Adam Abrons. Abrons left the project, but Hevery, who works at Google, continues to develop and maintain the library with fellow Google employees Igor Minár and Vojta Jína.

## Sending Feedback

For feedback can drop mail to my email address amit.naik8103@gmail.com or you can create [issue](https://github.com/Amitpnk/angular-customer-app/issues/new)

## Folder Structure

By end of lab, your project will look like this:

```
CustomerApplication/
  README.md
  node_modules/

  // ...

  angular.json
  package.json
  package-lock.json
  tsconfig.json
  tslint.json
  db.json
  
  // ...
  
  src/
    assets/
    CustomerApp/
      Customer/
        CustomerApp.CustomerComponent.ts      
        CustomerApp.CustomerModel.ts
        CustomerApp.CustomerModule.ts
        CustomerApp.CustomerView.html
      Home
        CustomerApp.HomeComponenttc
        CustomerApp.HomeView.html
        CustomerApp.MainModule.ts
        CustomerApp.MasterPageComponentts
        CustomerApp.MasterPageView.html
      Routing
        CustomerApp.CustomerRouting.ts
        CustomerApp.MainRouting.ts
        CustomerApp.SupplierRouting.ts
      Supplier
        CustomerAppsupplierComponent.ts
        CustomerApp.SupplierModule.ts
        CustomerApp.SupplierView.html
      Utility
        CustomerApp.GridComponent.ts
        CustomerApp.GridView.html
        CustomerApp.Logger.ts
    index.html
    main.ts

  // ...

```

## Available Scripts

In the project directory, you can run project individual by Labs

### `ng serve`

Runs the app in development mode <br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits. <br>
You will also see any lint errors in the console.

### `ng build`

Build the app for production to the `dist` folder. <br>

### `ng test`

Runs the test case 

## Sample application with each labs
### Lab 1 - npm example

It is command line interface which helps to get basic setup of angular project 
For eg: If we run, `npm install --save angular` we will able to get angular 1.7.8 as updated in package-lock.json file, so angular-cli helps to get latest version of angular (currently 7) with basic setup of angular project

### Lab 2 - Creating component and model

In this lab, we will create simple angular application with angular CLI and understand the architecture of it

### Lab 3 - Angular Routing - Creating Master page and Navigators

In this lab, we can see how we can implementing angular routing with master page and navigations

### Lab 4 - Implementing lazy loading and increase the performance of the application

In this lab, we can see how we can implementing lazy loading and increase the performance of the application

### Lab 5 - Validation using Angular validation framework

In this lab, we can see how we can implementing validation using Angular validation framework

### Lab 6 - Dependency Injection

In this lab will help us understand how to create better and decoupled architecture using DI feature of Angular

### Lab 7 - Input / Output and Event Emitters

In this lab, we will create reusable components using Angular

### Lab 8 - HTTP call in Angular

In this lab, we will make call to API by creating fake API and see how we can make RESTful API calls using Angular

### Lab 9 - Services

In this lab, using services will see how to implement HttpInterceptor

### Lab 10 - Implementing pipes

In this Lab will what is pipes and will see how to implement it

### Lab 11 - Angular Component Cycle

This is will be a demonstration of Angular component life cycle and in what event we can put
what kind of code

### Lab 12 - jQuery integration with Angular

In this lab we will see how to integrate old javascript frameworks like jQuery with Angular

### Lab 13 - Unit testing with Angular

Create simple unit test case on Angular components using Jasmine and Karma
