import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {MessageResponse} from '../model/message-response';

export const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  constructor(private http: HttpClient) {}

  resolveImageResource(imagePath: string): string {
    return API_URL.concat(imagePath);
  }

  getAutocompleteSearchDictionary(): Observable<string[]> {
    return this.http.get<string[]>(API_URL + '/util/autocomplete/search');
  }

  getAutocompleteSkillsDictionary(): Observable<string[]> {
    return this.http.get<string[]>(API_URL + '/util/autocomplete/skills');
  }

  getPopularSearchBuilds(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(API_URL + '/util/search-builds/job');
  }

  getDefaultUserImagePath(): string {
    return API_URL + '/img/user_default.png';
  }

  getDefaultCompanyLogoPath(): string {
    return API_URL + '/img/company_default.png';
  }

  uploadImageToUser(data: FormData): Observable<User> {
    return this.http.post<User>(API_URL + '/user/uploadImage', data);
  }

  uploadImageToCompany(data: FormData): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(API_URL + '/company/uploadImage', data);
  }
}
