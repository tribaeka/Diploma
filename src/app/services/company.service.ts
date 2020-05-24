import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../model/company';
import {API_URL} from './resource.service';
import {Job} from '../model/job';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  addCompany(companyData): Observable<Company> {
    return this.http.post<Company>(API_URL + '/company', companyData);
  }

  addContactToCompany(contactData, companyId: number): Observable<Company> {
    return this.http.post<Company>(API_URL + '/company/addContact/' + companyId, contactData);
  }
}
