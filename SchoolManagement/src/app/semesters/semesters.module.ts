import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemestersRoutingModule } from './semesters-routing.module';
import { SemestersHomeComponent } from './semesters-home/semesters-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SemestersHomeComponent
  ],
  imports: [
    CommonModule,
    SemestersRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class SemestersModule { }
