import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LyaoutsComponent } from './page/layaouts/Lyaouts.component';
import { LoginPageComponent } from './page/LoginPage/LoginPage.component';
import { RegisterPageComponent } from './page/RegisterPage/RegisterPage.component';
const routes: Routes = [
  {
    path: '',
    component: LyaoutsComponent,
    children: [
      { path: 'Login', component: LoginPageComponent },
      { path: 'new-account', component: RegisterPageComponent },
      { path: '**', redirectTo: 'Login' }
    ]
  },

]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule { }
