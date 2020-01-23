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
  results: Job[];
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query');
    this.searchService.executeJobSearch(this.query)
      .subscribe(data => this.results = data);
  }

}
