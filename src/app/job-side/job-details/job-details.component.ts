import { Component, OnInit } from '@angular/core';
import {Job} from '../../model/job';
import {JobService} from '../../services/job.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  job: Job;
  constructor(private jobService: JobService,
              private route: ActivatedRoute,
              private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const jobId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.jobService.getOneJob(jobId).subscribe(data => this.job = data);
  }

}
