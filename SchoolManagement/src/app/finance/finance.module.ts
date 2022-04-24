import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceHomeComponent } from './finance-home/finance-home.component';


@NgModule({
  declarations: [
    FinanceHomeComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
  exports:[FinanceHomeComponent]
})
export class FinanceModule { }
