import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassesHomeComponent } from './classes-home/classes-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ClassesHomeComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class ClassesModule { }
