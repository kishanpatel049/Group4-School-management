import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

const MatterialComponenst = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule
];


@NgModule({
  imports: [
    CommonModule, MatterialComponenst
  ],
  exports:[MatterialComponenst]
})
export class MaterialModule { }
