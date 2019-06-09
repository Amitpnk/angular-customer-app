import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';

@NgModule({
  declarations: [
    CustomerComponent,
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
