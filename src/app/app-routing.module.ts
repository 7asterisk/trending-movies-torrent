import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { TrendingDownloadPageComponent } from './trending-download-page/trending-download-page.component';
import { TrendingTodayComponent } from './trending-today/trending-today.component';
import { TrendingTodayDownloadComponent } from './trending-today-download/trending-today-download.component';

const routes: Routes = [{path: '', redirectTo: '/trending today', pathMatch: 'full'
},
{ path: 'trending this week', component: TrendingMoviesComponent },
{ path: 'trending today', component: TrendingTodayComponent },
{ path: 'download-page/:id', component: DownloadPageComponent },
{ path: 'trending-today-download/:id', component: TrendingTodayDownloadComponent },
{ path: 'trending-download-page/:id', component: TrendingDownloadPageComponent },
{ path: 'top 100 movies', component: TopMoviesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
