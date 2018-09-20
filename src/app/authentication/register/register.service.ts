import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  register(newUser) {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    console.log(newUser);
    return this.http.post(`${this.apiUrl}/api/v1/register`, newUser, httpOptions);
  }
}
