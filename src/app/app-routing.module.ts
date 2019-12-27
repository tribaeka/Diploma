import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JobListComponent} from './job-list/job-list.component';
import {JobFormComponent} from './job-form/job-form.component';


const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'addJob', component: JobFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
