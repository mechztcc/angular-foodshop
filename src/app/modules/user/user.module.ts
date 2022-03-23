import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';



@NgModule({
  declarations: [
    CreateAccountComponent,
    CreateAccountFormComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
