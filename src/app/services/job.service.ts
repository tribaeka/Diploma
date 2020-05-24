import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../model/job';
import {Skill} from '../model/skill';
import {API_URL} from './resource.service';

export const JOB_API_URL = 'http://localhost:8080/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  getOneJob(id: number): Observable<Job> {
    return this.http.get<Job>(JOB_API_URL + '/' + id);
  }

  createJob(jobData): Observable<Job> {
    return this.http.post<Job>(JOB_API_URL + '/', jobData);
  }

  linkJobWithSkillsSet(linkData: FormData): Observable<Job> {
    return this.http.post<Job>(JOB_API_URL + '/addSkills', linkData);
  }

  linkJobWithCompany(linkData: FormData): Observable<Job> {
    return this.http.post<Job>(JOB_API_URL + '/addCompany', linkData);
  }
}
