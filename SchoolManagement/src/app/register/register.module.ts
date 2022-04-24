import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './register-home/register-home.component';


@NgModule({
  declarations: [
    RegisterHomeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports:[RegisterHomeComponent]
})
export class RegisterModule { }
