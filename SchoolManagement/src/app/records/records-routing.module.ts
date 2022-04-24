import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsHomeComponent } from './records-home/records-home.component';

const routes: Routes = [
  {path:'records', component:RecordsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
