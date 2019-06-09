import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';

@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
