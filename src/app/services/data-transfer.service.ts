import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private subQuerySource = new BehaviorSubject<string>('');
  currentSubQuery = this.subQuerySource.asObservable();
  constructor() { }
  changeSubQuery(subQuery: string) {
    this.subQuerySource.next(subQuery.startsWith(' ') ? subQuery.slice(1) : subQuery);
  }
}
