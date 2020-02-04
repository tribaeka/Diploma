import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Experience} from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private readonly hostUrl: string;
  constructor(private http: HttpClient) {
    this.hostUrl = 'http://localhost:8080';
  }

  resolveImageResource(imagePath: string): string {
    return this.hostUrl.concat(imagePath);
  }

  getAutocompleteDictionary(): Observable<string[]> {
    return this.http.get<string[]>(this.hostUrl + '/util/autocomplete');
  }

  getListOfExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.hostUrl + '/util/experiences');
  }

  getPopularSearchBuilds(): Observable<Map<string, string>> {
    return this.http.get<Map<string, string>>(this.hostUrl + '/util/search-builds');
  }
}
