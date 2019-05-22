import { Component } from '@angular/core';
import { Customer } from "./Customer.Model";

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
}
