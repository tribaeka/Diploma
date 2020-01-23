import {Component, Input, OnInit} from '@angular/core';
import {JobService} from '../services/job.service';
import {Job} from '../model/job';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  @Input() jobs: Job[];

  constructor() {
  }

  ngOnInit() {
  }
}
