import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsHomeComponent } from './records-home/records-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RecordsHomeComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class RecordsModule { }
