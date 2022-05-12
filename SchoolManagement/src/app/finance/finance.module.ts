import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FinanceHomeComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class FinanceModule { }
