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
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
import {authInterceptorProviders} from './services/auth.interceptor';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CvSideModule,
    JobSideModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    AppRoutingModule,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
