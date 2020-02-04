import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Experience} from '../../model/experience';
import {Job} from '../../model/job';
import {JobFilter} from '../../model/job-filter';

@Component({
  selector: 'app-experience-filter',
  templateUrl: './experience-filter.component.html',
  styleUrls: ['./experience-filter.component.scss']
})
export class ExperienceFilterComponent implements OnInit, JobFilter {
  @Output() onApplyExperienceFilter = new EventEmitter();
  listOfExperiences: Experience[];
  filterValue: number;
  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getListOfExperiences().subscribe(data => this.listOfExperiences = data);
  }

  applyExperienceFilter(id: number) {
    this.filterValue = id;
    this.onApplyExperienceFilter.emit(this);
  }

  filter(jobs: Job[]): Job[] {
    if (this.filterValue === -1) { return  jobs; }
    return jobs.filter(job => job.experience.experienceId === this.filterValue);
  }
}
