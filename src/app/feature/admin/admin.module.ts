import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PendingComponent } from './components/pending/pending.component';
import { ApprovedComponent } from './components/approved/approved.component';
import { DeclinedComponent } from './components/declined/declined.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'

import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    PendingComponent,
    ApprovedComponent,
    DeclinedComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class AdminModule { }
