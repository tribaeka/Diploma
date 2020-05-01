import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable} from 'rxjs';
import {API_URL} from './resource.service';
import {Job} from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private tokenStorage: TokenStorageService, private http: HttpClient) { }

  addJobToHistory(id: number): Observable<any> {
    return this.http.post(API_URL + '/history/' + this.tokenStorage.getUser().userId, id);
  }

  getHistoryByUserId(userId: number): Observable<Job[]> {
    return this.http.get<Job[]>(API_URL + '/history/' + userId);
  }
}
