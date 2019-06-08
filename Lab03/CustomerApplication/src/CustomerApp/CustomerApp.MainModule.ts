import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasterPageComponent } from '../CustomerApp/Home/CustomerApp.MasterPageComponent';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../CustomerApp/Home/CustomerApp.HomeComponent';
import { CustomerComponent } from '../CustomerApp/Customer/CustomerApp.CustomerComponent';
import { SupplierComponent } from '../CustomerApp/Supplier/CustomerApp.SupplierComponent';
import { MainRoutes } from './Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent,
    CustomerComponent, SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
