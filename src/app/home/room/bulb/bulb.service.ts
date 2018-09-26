import {Injectable, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

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
}
