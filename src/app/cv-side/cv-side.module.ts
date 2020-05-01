import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvListItemComponent } from './cv-list-item/cv-list-item.component';
import {SharedModule} from '../shared/shared.module';
import { UserCvComponent } from './user-cv/user-cv.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {JobSideModule} from '../job-side/job-side.module';



@NgModule({
  declarations: [
  CvListComponent,
  CvListItemComponent,
  UserCvComponent,
  UserProfileComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    JobSideModule
  ]
})
export class CvSideModule { }
