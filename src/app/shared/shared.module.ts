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
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationFormModalComponent } from './registration-form-modal/registration-form-modal.component';
import { CreateCvFormModalComponent } from './create-cv-form-modal/create-cv-form-modal.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {FileUploadModule} from 'ng2-file-upload';
import { LineLoaderComponent } from './line-loader/line-loader.component';



@NgModule({
  declarations: [
    CompanySideBarComponent,
    LoaderComponent,
    LocationBadgeComponent,
    SkillSetComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    SearchBuildsComponent,
    LoginFormModalComponent,
    RegistrationFormModalComponent,
    CreateCvFormModalComponent,
    LineLoaderComponent
  ],
  exports: [
    CompanySideBarComponent,
    LoaderComponent,
    LocationBadgeComponent,
    SkillSetComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    SearchBuildsComponent,
    LoginFormModalComponent,
    RegistrationFormModalComponent,
    CreateCvFormModalComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
