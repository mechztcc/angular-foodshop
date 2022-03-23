import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreateAccountFormComponent } from './components/create-account-form/create-account-form.component';


@NgModule({
  declarations: [
    CreateAccountComponent,
    CreateAccountFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
