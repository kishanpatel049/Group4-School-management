import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

const MatterialComponenst = [
  MatButtonModule
];


@NgModule({
  imports: [
    CommonModule, MatterialComponenst
  ],
  exports:[MatterialComponenst]
})
export class MaterialModule { }
