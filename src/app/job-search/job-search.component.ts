import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {
  query: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  startSearch(searchForm) {
    this.router.navigate(['/search/job/', ]);
  }
}
