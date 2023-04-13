import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

import { UpdateComponent } from './components/update/update.component';
import { EmpTableComponent } from './components/emp-table/emp-table.component';

import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    EmployeeComponent,
    UpdateComponent,
    EmpTableComponent,
   
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
    
  ]
})
export class EmployeeModule { }
