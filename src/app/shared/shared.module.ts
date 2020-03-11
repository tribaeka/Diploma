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
import { CreateUpdateCvFormModalComponent } from './create-update-cv-form-modal/create-update-cv-form-modal.component';
import {ClickOutsideModule} from 'ng-click-outside';
import { LineLoaderComponent } from './line-loader/line-loader.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { FirstLetterToUpperCasePipe } from './pipes/first-letter-to-upper-case.pipe';
import { UploadImageModalComponent } from './upload-image-modal/upload-image-modal.component';



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
    CreateUpdateCvFormModalComponent,
    LineLoaderComponent,
    LogoutButtonComponent,
    FirstLetterToUpperCasePipe,
    UploadImageModalComponent
  ],
  exports: [
    CompanySideBarComponent,
    LoaderComponent,
    LocationBadgeComponent,
    SkillSetComponent,
    AutocompleteFilterPipe,
    AutocompleteBoldLetterPipe,
    FirstLetterToUpperCasePipe,
    SearchBuildsComponent,
    LoginFormModalComponent,
    RegistrationFormModalComponent,
    CreateUpdateCvFormModalComponent,
    LogoutButtonComponent,
    UploadImageModalComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
