import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsHomeComponent } from './records-home/records-home.component';


@NgModule({
  declarations: [
    RecordsHomeComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ],
  exports:[RecordsHomeComponent]
})
export class RecordsModule { }
