import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';
import { MaterialModule } from '../material/material.module';
import { SchoolcardsComponent } from './schoolcards/schoolcards.component';

@NgModule({
  declarations: [
    SchoolsHomeComponent,
    SchoolcardsComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class SchoolsModule { }
