import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { single } from 'rxjs';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:AuthComponent, children:[
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    //{ path: '**', component: NotFoundComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
