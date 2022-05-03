import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RegisterHomeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class RegisterModule { }
