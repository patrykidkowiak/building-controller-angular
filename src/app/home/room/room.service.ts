import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RoomService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public getRooms(homeId): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/v1/rooms/${homeId}`, {withCredentials: true});
  }
}
