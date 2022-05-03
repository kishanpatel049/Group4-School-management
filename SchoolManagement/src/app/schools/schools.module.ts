import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SchoolsHomeComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class SchoolsModule { }
