import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {JobService} from './services/job.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CompanySideBarComponent } from './company-side-bar/company-side-bar.component';
import { LocationBadgeComponent } from './location-badge/location-badge.component';
import {JobListItemComponent} from './job-list-item/job-list-item.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    JobListItemComponent,
    CompanySideBarComponent,
    LocationBadgeComponent,
    JobSearchComponent,
    SkillSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
