import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe, Subscription} from 'rxjs';

const API_URL = 'http://localhost:8080/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginData): Observable<any> {
    return this.http.post<User>(API_URL + '/signin', loginData);
  }

  registration(registrationData, role?: string): Observable<any> {
    if (!!role) {
      registrationData.role = [ role ];
    } else {
      registrationData.role = [ 'user' ];
    }
    return this.http.post<any>(API_URL + '/signup', registrationData);
  }
}
