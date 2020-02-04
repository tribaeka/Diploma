import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobDetailsComponent} from './job-side/job-details/job-details.component';
import {JobSearchResultsComponent} from './job-side/job-search-results/job-search-results.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/job',
    pathMatch: 'full'
  },
  { path: 'job', component: HomeComponent, data: {side: 'job'} },
  { path: 'cv', component: HomeComponent, data: {side: 'cv'} },
  { path: 'job/search/:query', component: JobSearchResultsComponent },
  { path: 'job/:id/:query', component: JobDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
