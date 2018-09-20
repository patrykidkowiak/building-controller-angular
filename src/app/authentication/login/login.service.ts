import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  doLogin(login: string, password: string) {
    console.log(login);
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded'
      }),
      withCredentials: true
    };
    const postData = `email=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}&submit`;

    return this.http.post(`${this.apiUrl}/api/v1/authenticate`, postData, httpOptions);

  }

  doLogout() {
    this.cookieService.delete('USER_LOGGED');
    this.cookieService.delete('JSESSIONID');
    const httpOptions = {
      withCredentials: true
    };
    return this.http.post(`${this.apiUrl}/api/v1/logout`, httpOptions);

  }

}

