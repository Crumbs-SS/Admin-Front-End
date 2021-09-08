import { Component } from '@angular/core';
import {AuthenticationService} from '../../../../Shared/Service/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public form: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;

  constructor(private authenticationService: AuthenticationService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
    });
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this.authenticationService.login(username, password)
            .subscribe(
                (() => this.router.navigate(['/crumbs/admin'])),
                (() => this.loginInvalid = true)
            );
      } catch (err) {
        this.loginInvalid = true;
      }
    }
    else {
      this.formSubmitAttempt = true;
    }
  }
}
