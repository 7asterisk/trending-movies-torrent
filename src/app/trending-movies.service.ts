import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TrendingMoviesService {
  movies;
  constructor(private http: HttpClient,  public db: AngularFirestore) { }
  getMovies(): Observable<any> {
    return this.http.get<any>('../assets/trending.json');
  }
  getTodaysMovies(): Observable <any> {
    this.db.collection('ttoday').valueChanges().subscribe(data => {this.movies = data;
      console.log(this.movies);
    });
    return this.movies;
    //  console.log(this.movies);
  }
}
