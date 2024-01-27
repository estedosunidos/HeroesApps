import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { LyaoutsComponent } from './page/layaouts/Lyaouts.component';
import { RegisterPageComponent } from './page/RegisterPage/RegisterPage.component';
import { LoginPageComponent } from './page/LoginPage/LoginPage.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [LyaoutsComponent,RegisterPageComponent,LoginPageComponent]
})
export class AuthModule { }
