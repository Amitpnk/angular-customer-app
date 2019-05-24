import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { RouterModule } from "@angular/router";
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { CommonModule } from '@angular/common';
import { ILogger, consoleLogger, BaseLogger, DBLogger, FileLogger } from "../Utility/CustomerApp.Logger";

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  providers: [
    // Centrailised DI
    { provide: BaseLogger, useClass: consoleLogger },

    // conditional DI
    { provide: "1", useClass: DBLogger },
    { provide: "2", useClass: FileLogger }
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
