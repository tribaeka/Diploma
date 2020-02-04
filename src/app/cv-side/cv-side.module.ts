import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CvHomeComponent} from './cv-home/cv-home.component';



@NgModule({
  declarations: [
    CvHomeComponent
  ],
  exports: [
    CvHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CvSideModule { }
