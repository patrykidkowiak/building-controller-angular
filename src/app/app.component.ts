import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from './authentication/auth.service';
import {LoginService} from './authentication/login/login.service';
import {Router} from '@angular/router';
import {User} from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  isLogged = true;
  loggedUser: User;

  constructor(private authService: AuthService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.isLogged = this.authService.isUserLogged();
    this.getLoggedUser();
  }

  ngDoCheck(): void {
    this.isLogged = this.authService.isUserLogged();
    // this.getLoggedUser();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLogged = this.authService.isUserLogged();
    // this.getLoggedUser();
  }

  sendLogoutForm() {
    this.loginService
      .doLogout()
      .subscribe((resp) => this.router.navigate(['/']),
        (err) => console.log(JSON.stringify(err))
      );
  }

  getLoggedUser() {
    if (this.isLogged) {
      this.authService.getLoggedUserData().subscribe(
        user => {
          this.loggedUser = user;
        },
        error => console.log(JSON.stringify(error))
      );
    }
  }
}
