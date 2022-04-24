import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'
const routes: Routes = [];

const MatterialComponenst = [
  MatButtonModule
];
@NgModule({
  imports: [MatterialComponenst, RouterModule.forRoot(routes)],
  exports: [MatterialComponenst, RouterModule]
})
export class AppRoutingModule { }
