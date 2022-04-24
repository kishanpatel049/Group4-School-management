import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesHomeComponent } from './courses-home/courses-home.component';


@NgModule({
  declarations: [
    CoursesHomeComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports:[CoursesHomeComponent]
})
export class CoursesModule { }
