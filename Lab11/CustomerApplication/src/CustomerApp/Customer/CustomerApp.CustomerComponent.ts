import { Component, Injector } from '@angular/core';
import { Customer } from './CustomerApp.CustomerModel';
import { BaseLogger, ConsoleLogger, DbLogger } from '../Utility/CustomerApp.Logger';
import { HttpClient } from '@angular/common/http';

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

  constructor(inject: Injector, public http: HttpClient) {
    this.logObj = inject.get('2');
    this.logObj.Log();
    this.GetFromServer();
  }

  SelectCustomer(select: Customer) {

    this.CustomerModel.CustomerCode = select.CustomerCode;
    this.CustomerModel.CustomerName = select.CustomerName;
    this.CustomerModel.CustomerAmount = select.CustomerAmount;

  }

  Add() {
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  GetFromServer() {
    this.http.get("http://localhost:3000/Customers").
      subscribe(res => this.SuccessGet(res), res => this.Error(res));
  }
  SuccessGet(res) {
    this.CustomerModels = res;
    this.CustomerModel = new Customer();
  }

  PostToServer() {
    const custDto: any = {};
    custDto.CustomerCode = this.CustomerModel.CustomerCode;
    custDto.CustomerName = this.CustomerModel.CustomerName;
    custDto.CustomerAmount = this.CustomerModel.CustomerAmount;

    this.http.post('http://localhost:3000/Customers', custDto)
      .subscribe(res => this.Success(res), res => this.Error(res));
  }
  Success(res) {
    // this.CustomerModels = res;
    this.GetFromServer();
  }
  Error(res) {
    console.log(res);
  }

  hasError(typeofcontrol: string, controlName: string): boolean {
    const x = this.CustomerModel.formCustomerGroup.controls[controlName].hasError(typeofcontrol);
    return x;
  }
}
