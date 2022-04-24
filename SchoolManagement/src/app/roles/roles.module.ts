import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesHomeComponent } from './roles-home/roles-home.component';


@NgModule({
  declarations: [
    RolesHomeComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ],
  exports:[RolesHomeComponent]
})
export class RolesModule { }
