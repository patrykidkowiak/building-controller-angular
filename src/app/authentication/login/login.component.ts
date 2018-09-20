///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasErrors = false;

  constructor(private loginService: LoginService,
              private router: Router,
              private authService: AuthService,
              private cookieService: CookieService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ])),
      password: new FormControl()
    });
  }

  sendLoginForm() {
    this.loginService
      .doLogin(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((resp) => {
          this.cookieService.set('USER_LOGGED', 'TRUE');
          this.router.navigate(['/']);
        },
        (err) => this.hasErrors = true
      );
  }
}
