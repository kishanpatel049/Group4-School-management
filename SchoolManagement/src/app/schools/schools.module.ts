import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




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
