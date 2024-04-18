import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { header } from './Shared/header';
import { footer } from './Shared/footer';
import { SignupComponent } from './SignUp/signup/signup.component';
import { HomeComponent } from './Shared/home/home.component';
import { ListErrorsComponent } from './Shared/list-errors/list-errors.component';
import { ReactiveFormsModule } from '@angular/forms';
import LoginComponent from './Login/login/login.component';
import { CommonService } from './Service/CommonService';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    header,
    footer,
    SignupComponent,
    HomeComponent,
    ListErrorsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
