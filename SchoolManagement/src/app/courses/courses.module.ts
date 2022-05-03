import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CoursesHomeComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class CoursesModule { }
