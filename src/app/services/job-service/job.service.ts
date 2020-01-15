import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from './job';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobsUrl: string;

  constructor(private http: HttpClient) {
    this.jobsUrl = 'http://localhost:8080/job';
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl).pipe(
      map((result: any) => {
        return result._embedded.job;
      })
    );

  }

  public save(job: Job) {
    return this.http.post<Job>(this.jobsUrl, job);
  }
}
