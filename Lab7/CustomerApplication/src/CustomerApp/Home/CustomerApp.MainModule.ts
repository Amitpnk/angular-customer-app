import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MasterpageComponent } from './CustomerApp.MasterPageComponent';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './CustomerApp.HomeComponent';
import { RouterModule } from "@angular/router";
import { MainRoutes } from "../Routing/CustomerApp.MainRouting";

@NgModule({
  declarations: [
    MasterpageComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterpageComponent]
})
export class MainModule { }
