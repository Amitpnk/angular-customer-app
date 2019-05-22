import { Component } from '@angular/core';
import { Customer } from "./Customer.Model";
import { CustomerModule } from './CustomerApp.CustomerModule';

@Component({
  templateUrl: './CustomerApp.CustomerView.html',
})
export class CustomerComponent {
  title = 'Customer App';
  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();

  Add() {
    this.customerModels.push(this.customerModel);
    this.customerModel = new Customer();
  }

  hasError(typeofValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }

}
