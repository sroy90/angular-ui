import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpTableComponent } from './components/emp-table/emp-table.component';

import { UpdateComponent } from './components/update/update.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent, children: [
      { path: 'emp-table', component: EmpTableComponent },
      { path: 'update', component: UpdateComponent }
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
