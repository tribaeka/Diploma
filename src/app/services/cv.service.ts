import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Cv} from '../model/cv';
import {TokenStorageService} from './token-storage.service';
import {API_URL} from './resource.service';
import {MessageResponse} from '../model/message-response';

const CV_API_URL = 'http://localhost:8080/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
  }

  gerUsersCv(): Observable<Cv[]> {
    return this.http.get<Cv[]>(CV_API_URL + '/user/' + this.tokenStorage.getUser().username);
  }

  downloadCv(cv: Cv) {
    const urlForDownloading = CV_API_URL + '/download/' + cv.cvId;

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', urlForDownloading);
    link.setAttribute('download', cv.fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  deleteCv(cv: Cv): Observable<Cv[]> {
    return this.http.delete<Cv[]>(CV_API_URL + '/' + cv.cvId);
  }

  createCv(data): Observable<any> {
    return this.http.post(CV_API_URL, data);
  }

  sendCvToContact(formData: FormData): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(API_URL + '/util/sendJobRespond', formData);
  }
}
