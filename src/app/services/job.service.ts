import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly jobsUrl: string;

  constructor(private http: HttpClient) {
    this.jobsUrl = 'http://localhost:8080/job';
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  getOneJob(id: number): Observable<Job> {
    return this.http.get<Job>(this.jobsUrl + '/' + id);
  }

  public save(job: Job) {
    return this.http.post<Job>(this.jobsUrl, job);
  }
}
