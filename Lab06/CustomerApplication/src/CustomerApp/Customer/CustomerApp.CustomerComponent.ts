import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.CustomerModel';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utility/CustomerApp.Logger';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'CustomerApplication';

  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();

  //  logObj: BaseLogger = new DbLogger();
  //  logObj: BaseLogger
  logObj: any;

  // constructor(logger: BaseLogger) {
  //   this.logObj = logger;
  //   this.logObj.Log();
  // }

  constructor(inject: Injector) {
    this.logObj = inject.get('2');
    this.logObj.Log();
  }

  Add() {

    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeofcontrol: string, controlName: string): boolean {
    const x = this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeofcontrol);
    return x;
  }
}
