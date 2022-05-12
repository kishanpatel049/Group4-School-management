import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';
import { CreateSchoolComponent } from './create-school/create-school.component';


@NgModule({
  declarations: [
    SchoolsHomeComponent,
    CreateSchoolComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ],
  exports:[]
})
export class SchoolsModule { }
