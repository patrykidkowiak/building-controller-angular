import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getHomes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/homes`, {withCredentials: true});
  }

  createHome(home) {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.post(`${this.apiUrl}/api/v1/home`, home, httpOptions);
  }
}
