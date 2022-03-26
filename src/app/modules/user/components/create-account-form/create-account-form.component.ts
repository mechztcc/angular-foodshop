import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/types/user.interface';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent implements OnInit {

  form: FormGroup;

  loading: boolean = false;

  errorCompany: boolean = false;
  errorEmail: boolean = false;
  errorPassword: boolean = false;
  errorConfirmPass: boolean = false;

  user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      company: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
  }

  validateForm() {
    if(this.form.controls['company'].invalid) {
      this.errorCompany = true;
    }
    if(this.form.controls['email'].invalid) {
      this.errorEmail = true;
    }
    if(this.form.controls['password'].invalid) {
      this.errorPassword = true;
    }
    if(this.form.controls['confirmPass'].invalid) {
      this.errorConfirmPass = true;
    }

    if(this.form.valid) {
      this.mountPayload();
      this.createAccount();
    }
  }

  mountPayload() {
    this.user = {
      name: this.form.controls['company'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    }
  }

  createAccount() {
    this.loading = true;
    this.userService.createAccount(this.user)
      .subscribe((data: User) => {
        console.log(data);
        this.toastrService.success('Conta criada com sucesso.', 'Sucesso!');
      }).add(() => {
        this.loading = false;
      });
  }

  navigate() {
    this.router.navigate(['user/login'])
  }

}
