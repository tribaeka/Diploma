import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experience} from '../model/experience';

const API_URL = 'http://localhost:8080';

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

  getListOfExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(API_URL + '/util/experiences');
  }

  getPopularSearchBuilds(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(API_URL + '/util/search-builds/job');
  }

  getDefaultUserImagePath() {
    return API_URL + '/img/user_default.png';
  }

  getUserImagePath(imageName: string) {
    return API_URL + '/img/user/' + imageName;
  }
}
