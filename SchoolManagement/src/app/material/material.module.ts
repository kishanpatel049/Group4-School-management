import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

const MatterialComponenst = [
  MatButtonModule,
  MatSidenavModule
];


@NgModule({
  imports: [
    CommonModule, MatterialComponenst
  ],
  exports:[MatterialComponenst]
})
export class MaterialModule { }
