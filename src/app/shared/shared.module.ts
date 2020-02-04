import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanySideBarComponent} from './company-side-bar/company-side-bar.component';
import {LoaderComponent} from './loader/loader.component';
import {LocationBadgeComponent} from './location-badge/location-badge.component';
import {SkillSetComponent} from './skill-set/skill-set.component';
import {AutocompleteFilterPipe} from './pipes/autocomplete-filter.pipe';
import {AutocompleteBoldLetterPipe} from './pipes/autocomplete-bold-letter.pipe';
import {SearchBuildsComponent} from './search-builds/search-builds.component';
import {AppRoutingModule} from '../app-routing.module';
import { LoginFormModalComponent } from './login-form-modal/login-form-modal.component';



@NgModule({
  declarations: [
    CompanySideBarComponent,
    LoaderComponent,
    LocationBadgeComponent,
    SkillSetComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    SearchBuildsComponent,
    LoginFormModalComponent
  ],
  exports: [
    CompanySideBarComponent,
    LoaderComponent,
    LocationBadgeComponent,
    SkillSetComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    SearchBuildsComponent,
    LoginFormModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
