import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemestersRoutingModule } from './semesters-routing.module';
import { SemestersHomeComponent } from './semesters-home/semesters-home.component';


@NgModule({
  declarations: [
    SemestersHomeComponent
  ],
  imports: [
    CommonModule,
    SemestersRoutingModule
  ],
  exports:[]
})
export class SemestersModule { }
