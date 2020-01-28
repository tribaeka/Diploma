import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../services/search.service';
import {Job} from '../model/job';

@Component({
  selector: 'app-job-search-results',
  templateUrl: './job-search-results.component.html',
  styleUrls: ['./job-search-results.component.scss']
})
export class JobSearchResultsComponent implements OnInit {
  query: string;
  initResults: Job[];
  results: Job[];
  isLoading: boolean;

  constructor(private route: ActivatedRoute, private searchService: SearchService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.searchService.executeJobSearch(this.query)
      .subscribe(data => {
        this.initResults = this.results = data;
        this.isLoading = false;
      });
  }

  updateResults(jobs: Job[]) {
    this.results = jobs;
  }
}
