import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClickOutsideModule} from 'ng-click-outside';
import {CvSideModule} from './cv-side/cv-side.module';
import {JobSideModule} from './job-side/job-side.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule,
    CvSideModule,
    JobSideModule
  ],
  providers: [
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
