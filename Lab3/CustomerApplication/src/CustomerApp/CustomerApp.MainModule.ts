import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasterpageComponent } from './CustomerApp.MasterPageComponent';
import { FormsModule } from "@angular/forms";
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';

import { RouterModule } from "@angular/router";
import { MainRoutes } from "./Routing/CustomerApp.MainRouting";

@NgModule({
  declarations: [
    MasterpageComponent, CustomerComponent, SupplierComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterpageComponent]
})
export class AppModule { }
