import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvListItemComponent } from './cv-list-item/cv-list-item.component';
import {SharedModule} from '../shared/shared.module';
import { UserCvComponent } from './user-cv/user-cv.component';



@NgModule({
  declarations: [
  CvListComponent,
  CvListItemComponent,
  UserCvComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CvSideModule { }
