import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../model/job';

const JOB_API_URL = 'http://localhost:8080/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(JOB_API_URL);
  }

  getOneJob(id: number): Observable<Job> {
    return this.http.get<Job>(JOB_API_URL + '/' + id);
  }

  public save(job: Job) {
    return this.http.post<Job>(JOB_API_URL, job);
  }
}
