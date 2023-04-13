import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { DeclinedComponent } from './components/declined/declined.component';
import { PendingComponent } from './components/pending/pending.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'pending', component: PendingComponent },
      { path: 'approved', component: ApprovedComponent },
      { path: 'declined', component: DeclinedComponent },
      { path: '', redirectTo:'/pending', pathMatch:'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
