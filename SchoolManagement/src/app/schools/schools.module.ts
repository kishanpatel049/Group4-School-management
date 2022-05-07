import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';

@NgModule({
  declarations: [
    SchoolsHomeComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ],
  exports:[]
})
export class SchoolsModule { }
