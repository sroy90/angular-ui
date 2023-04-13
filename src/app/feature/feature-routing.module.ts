import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

//import { AdminComponent } from './admin/admin.component';
//import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  
  { path:'employee', 
    loadChildren: ()=> 
      import('./employee/employee.module').then((child)=>child.EmployeeModule)
  },
  { 
    path:'admin',
    canActivateChild : [AuthGuard], 
    loadChildren: ()=> 
      import('./admin/admin.module').then((child)=>child.AdminModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
