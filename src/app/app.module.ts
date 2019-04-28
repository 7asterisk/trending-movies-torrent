import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatSidenavModule,  MatIconModule, MatListModule} from '@angular/material';

import { AngularFireModule } from '@angular/fire';

import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { MoviesService } from './movies.service';
import { DownloadPageComponent } from './download-page/download-page.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { TrendingDownloadPageComponent } from './trending-download-page/trending-download-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TrendingTodayComponent } from './trending-today/trending-today.component';
import { TrendingTodayDownloadComponent } from './trending-today-download/trending-today-download.component';
import { firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMoviesComponent,
    DownloadPageComponent,
    TrendingMoviesComponent,
    TrendingDownloadPageComponent,
    FilterPipe,
    TrendingTodayComponent,
    TrendingTodayDownloadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MoviesService, AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
