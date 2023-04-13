import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FeatureComponent } from './feature/feature.component';



const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'auth', component: AuthComponent },
  { path: 'feature', component: FeatureComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
