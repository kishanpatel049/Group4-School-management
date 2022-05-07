import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MatterialComponenst = [
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatInputModule,
  MatFormFieldModule,
];


@NgModule({
  imports: [
    CommonModule, MatterialComponenst
  ],
  exports:[MatterialComponenst]
})
export class MaterialModule { }
