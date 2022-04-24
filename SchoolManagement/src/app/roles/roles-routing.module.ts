import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesHomeComponent } from './roles-home/roles-home.component';

const routes: Routes = [
  {path:'roles', component:RolesHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
