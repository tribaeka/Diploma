import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../model/job';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.scss']
})
export class JobListItemComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit() {
  }
}
