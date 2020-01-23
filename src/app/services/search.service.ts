import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Job} from '../model/job';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly jobSearchUrl: string;
  constructor(private http: HttpClient) {
    this.jobSearchUrl = 'http://localhost:8080/job?query=';
  }

  executeJobSearch(query: string): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobSearchUrl + query);
  }
}
