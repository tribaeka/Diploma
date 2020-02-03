import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {JobService} from './services/job.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanySideBarComponent } from './company-side-bar/company-side-bar.component';
import { LocationBadgeComponent } from './location-badge/location-badge.component';
import {JobListItemComponent} from './job-list-item/job-list-item.component';
import { JobSearchInputComponent } from './job-search-input/job-search-input.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { JobFilterComponent } from './job-filter/job-filter.component';
import { SalaryFilterComponent } from './salary-filter/salary-filter.component';
import { LoaderComponent } from './loader/loader.component';
import { AutocompleteFilterPipe } from './pipes/autocomplete-filter.pipe';
import { AutocompleteBoldLetterPipe } from './pipes/autocomplete-bold-letter.pipe';
import { ClickOutsideModule} from 'ng-click-outside';
import { TypeFilterComponent } from './type-filter/type-filter.component';
import { ExperienceFilterComponent } from './experience-filter/experience-filter.component';
import { SimilarJobsComponent } from './similar-jobs/similar-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    JobListItemComponent,
    CompanySideBarComponent,
    LocationBadgeComponent,
    JobSearchInputComponent,
    SkillSetComponent,
    JobFilterComponent,
    SalaryFilterComponent,
    LoaderComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    TypeFilterComponent,
    ExperienceFilterComponent,
    SimilarJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  providers: [
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
