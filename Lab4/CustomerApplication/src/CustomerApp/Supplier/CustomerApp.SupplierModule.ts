import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { RouterModule } from "@angular/router";
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SupplierComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
