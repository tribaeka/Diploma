import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalaryFilterComponent} from './salary-filter/salary-filter.component';
import {ExperienceFilterComponent} from './experience-filter/experience-filter.component';
import {TypeFilterComponent} from './type-filter/type-filter.component';



@NgModule({
  declarations: [
    SalaryFilterComponent,
    ExperienceFilterComponent,
    TypeFilterComponent
  ],
  exports: [
    SalaryFilterComponent,
    ExperienceFilterComponent,
    TypeFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FiltersModule { }
