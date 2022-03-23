import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    CreateAccountComponent,
    CreateAccountFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
