import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';

import { ILogger, ConsoleLogger, BaseLogger, DbLogger, EmailLogger } from '../Utility/CustomerApp.Logger';

@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
    // Centrailised DI
    { provide: BaseLogger, useClass: EmailLogger },

    // Condition based or Token based DI
    { provide: '1', useClass: DbLogger },
    { provide: '2', useClass: ConsoleLogger }
  ],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
