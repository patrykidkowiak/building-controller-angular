import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = environment.apiUrl;

  constructor(private cookieService: CookieService,
              private http: HttpClient) {
  }

  public isUserLogged(): boolean {
    return this.cookieService.check('USER_LOGGED');
  }

  public getLoggedUserData(): Observable<any>  {
    return this.http.get(`${this.apiUrl}/api/v1/account`, {withCredentials: true});
  }
}
