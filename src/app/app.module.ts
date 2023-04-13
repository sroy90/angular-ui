import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { AuthModule } from './auth/auth.module';
import { FeatureModule } from './feature/feature.module';
import { SharedModule} from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { CoreModule } from './core/core.module';
import { AuthService } from './auth/services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FeatureModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
