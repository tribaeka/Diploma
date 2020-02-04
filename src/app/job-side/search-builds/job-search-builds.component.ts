import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-search-builds',
  templateUrl: './job-search-builds.component.html',
  styleUrls: ['./job-search-builds.component.scss']
})
export class JobSearchBuildsComponent implements OnInit {
  builds: Map<string, string>;
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getPopularSearchBuilds().subscribe(data => this.builds = data);
  }

}
