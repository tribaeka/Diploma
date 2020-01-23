import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobListComponent} from './job-list/job-list.component';
import {JobDetailsComponent} from './job-details/job-details.component';
import {HomeComponent} from './home/home.component';
import {JobSearchResultsComponent} from './job-search-results/job-search-results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/job/:query', component: JobSearchResultsComponent },
  { path: 'job/:id', component: JobDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [JobSearchResultsComponent, JobListComponent, JobDetailsComponent, HomeComponent ];
