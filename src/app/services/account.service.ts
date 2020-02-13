import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currentUser: User;
  authApiUrl: string;
  constructor(private http: HttpClient) {
    this.authApiUrl = 'http://localhost:8080/api/auth';
  }

  login(loginData) {
    return this.http.post<User>(this.authApiUrl + '/signin', loginData);
  }

  logout() {
    this.currentUser = undefined;
  }

  registration(registrationData) {
    return this.http.post<any>(this.authApiUrl + '/signup', this.addUserRoleToData(registrationData));
  }

  addUserRoleToData(formData) {
    formData.role = [ 'user' ];
    return formData;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getUsername(): string {
    return this.currentUser.username;
  }
}
