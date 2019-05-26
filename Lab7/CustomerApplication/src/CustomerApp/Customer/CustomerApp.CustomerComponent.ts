import { Component, Injector } from '@angular/core';
import { Customer } from "./Customer.Model";
import { ILogger, consoleLogger, DBLogger, BaseLogger } from "../Utility/CustomerApp.Logger";

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'Customer App';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();

  logObj: BaseLogger = null;
  // constructor(_logger: BaseLogger){
  //   this.logObj = _logger;
  //   this.logObj.Log();
  // }
  constructor(_injector: Injector) {
    this.logObj = _injector.get("2");
    this.logObj.Log();
  }

  SelectCustomer(_selected: Customer) {
    this.customerModel = _selected;
  }

  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }

  hasError(typeofValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

}
