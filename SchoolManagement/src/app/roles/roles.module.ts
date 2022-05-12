import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesHomeComponent } from './roles-home/roles-home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RolesHomeComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    MaterialModule
  ],
  exports:[]
})
export class RolesModule { }
