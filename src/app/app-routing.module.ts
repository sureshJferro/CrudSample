import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './SignUp/signup/signup.component';
import { HomeComponent } from './Shared/home/home.component';
import LoginComponent from './Login/login/login.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"login",
  component:LoginComponent
},
{
  path:"register",
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
