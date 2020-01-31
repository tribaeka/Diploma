import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Job} from '../model/job';
import {JobFilter} from '../model/job-filter';

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.scss']
})
export class TypeFilterComponent implements OnInit, JobFilter {
  @Output() onApplyTypeFilter = new EventEmitter();
  @Output() onResetTypeFilter = new EventEmitter();
  filterValue: string;
  constructor() { }

  ngOnInit() {
  }

  applyTypeFilter(typeOfFilter: string) {
    this.filterValue = typeOfFilter;
    this.onApplyTypeFilter.emit(this);
  }

  filter(jobs: Job[]): Job[] {
    switch (this.filterValue) {
      case 'All': return jobs;
      case 'Remote': return jobs.filter((item: Job) => item.location.name === 'Remote');
      case 'Local': return jobs.filter((item: Job) => item.location.name !== 'Remote');
    }
  }
}
