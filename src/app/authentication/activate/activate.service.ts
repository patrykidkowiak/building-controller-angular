import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public activate(activationHash) {
    return this.http.get(`${this.apiUrl}/api/v1/activate/${activationHash}`);
  }
}
