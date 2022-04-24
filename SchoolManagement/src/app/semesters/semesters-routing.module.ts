import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemestersHomeComponent } from './semesters-home/semesters-home.component';

const routes: Routes = [
  {path:'semesters', component:SemestersHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemestersRoutingModule { }
