import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cp5Component } from './cp5/cp5.component';
import { Cp6Component } from './cp6/cp6.component';

const routes: Routes = [
  {
    path:'',redirectTo:'cp5',pathMatch:'full'
  },
  {
    path:'cp5',
    component:Cp5Component
  },
  {
    path:'cp6',
    component:Cp6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
