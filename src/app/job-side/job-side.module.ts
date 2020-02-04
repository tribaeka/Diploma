import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobDetailsComponent} from './job-details/job-details.component';
import {JobListComponent} from './job-list/job-list.component';
import {JobListItemComponent} from './job-list-item/job-list-item.component';
import {JobSearchResultsComponent} from './job-search-results/job-search-results.component';
import {JobSearchInputComponent} from './job-search-input/job-search-input.component';
import {SimilarJobsComponent} from './similar-jobs/similar-jobs.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {JobFilterComponent} from './job-filter/job-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FiltersModule} from '../filters/filters.module';



@NgModule({
  declarations: [
    JobDetailsComponent,
    JobListComponent,
    JobListItemComponent,
    JobSearchResultsComponent,
    JobSearchInputComponent,
    JobFilterComponent,
    SimilarJobsComponent
  ],
  exports: [
    JobSearchInputComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FiltersModule
  ]
})
export class JobSideModule { }
