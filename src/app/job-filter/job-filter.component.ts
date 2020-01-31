import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Job} from '../model/job';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent implements OnInit {
  @Input() jobs: Job[];
  @Output() onUpdateResults = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  applySalaryFilter(filterValue: number) {
    this.onUpdateResults.emit(this.jobs.filter((item: Job) => item.salary >= filterValue));
  }

  applyTypeFilter(isRemoteType: boolean) {
    isRemoteType ?
      this.onUpdateResults.emit(this.jobs.filter((item: Job) => item.location.name === 'Remote')) :
      this.onUpdateResults.emit(this.jobs.filter((item: Job) => item.location.name !== 'Remote'));
  }

  resetTypeFilter() {
    this.onUpdateResults.emit(this.jobs);
  }
}
