import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/types/user.interface';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  isVisible: boolean = false;

  form: FormGroup;

  user: User;
  isLoading: boolean = false;

  errorPassword: boolean = false;
  errorEmail: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  validateForm() {
    if(this.form.controls['password'].invalid) {
      this.errorPassword = true;
    }
    if(this.form.controls['email'].invalid) {
      this.errorEmail = true;
    }

    if(this.form.valid) {
      this.mountPayload();
      this.login();
    }
  }

  mountPayload() {
    this.user = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    }
  }

  login() {
    this.isLoading = true;
    this.userService.login(this.user)
      .subscribe((data: User) => {
        this.toastrService.success('Logado com sucesso.', 'Sucesso!');
      }).add(() => {
        this.isLoading = false;
      });
  }

  navigate() {
    this.router.navigate(['user/create-account']);
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }


}
