import { Component } from '@angular/core';
import {Job} from '../services/job-service/job';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../services/job-service/job.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {
  job: Job;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService) {
    this.job = new Job();
  }

  onSubmit() {
    this.jobService.save(this.job).subscribe(result => this.gotoJobList());
  }

  gotoJobList() {
    this.router.navigate(['/jobs']);
  }
}
