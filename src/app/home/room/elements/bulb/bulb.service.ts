import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Bulb} from './bulb';

@Injectable({
  providedIn: 'root'
})
export class BulbService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getBulbs(roomId): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/bulbs/${roomId}`, {withCredentials: true});
  }

  updateBulb(bulb) {
    const httpOptions = {
      withCredentials: true,
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
    return this.http.put(`${this.apiUrl}/api/v1/bulb`, bulb, httpOptions);
  }
}
