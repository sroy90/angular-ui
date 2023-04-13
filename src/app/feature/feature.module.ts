import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { FeatureComponent } from './feature.component';

import { EmployeeModule } from './employee/employee.module';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [
    FeatureComponent,

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    EmployeeModule,
    AdminModule
  ]
})
export class FeatureModule { }
