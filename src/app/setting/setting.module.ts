import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { Cp4Component } from './cp4/cp4.component';
import { Cp5Component } from './cp5/cp5.component';
import { Cp6Component } from './cp6/cp6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Cp4Component,
    Cp5Component,
    Cp6Component
  ],
  imports: [
    FormsModule,
    CommonModule,
    SettingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SettingModule { }
