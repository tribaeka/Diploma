import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Job} from '../model/job';
import {Observable} from 'rxjs';

const JOB_SEARCH_API_URL = 'http://localhost:8080/job/search?query=';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}

  executeJobSearch(query: string): Observable<Job[]> {
    return this.http.get<Job[]>(JOB_SEARCH_API_URL + encodeURIComponent(query));
  }
}
