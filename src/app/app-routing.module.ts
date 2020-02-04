import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobDetailsComponent} from './job-side/job-details/job-details.component';
import {JobHomeComponent} from './job-side/job-home/job-home.component';
import {JobSearchResultsComponent} from './job-side/job-search-results/job-search-results.component';
import {CvHomeComponent} from './cv-side/cv-home/cv-home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/job',
    pathMatch: 'full'
  },
  { path: 'job', component: JobHomeComponent },
  { path: 'cv', component: CvHomeComponent },
  { path: 'job/search/:query', component: JobSearchResultsComponent },
  { path: 'job/:id/:query', component: JobDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
