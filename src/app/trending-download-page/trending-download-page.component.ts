import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingMoviesService } from '../trending-movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trending-download-page',
  templateUrl: './trending-download-page.component.html',
  styleUrls: ['./trending-download-page.component.scss']
})
export class TrendingDownloadPageComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public db: AngularFirestore, private sanitizer: DomSanitizer) {
      }
  movie;
  Url;
  name;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.doc('tweek/' + id).valueChanges().subscribe( data => {this.movie = data;
    // console.log(this.movie);
    this.sanitize (this.movie.magnet);
  }
      );
  }
  sanitize(url: string) {
    this.Url = this.sanitizer.bypassSecurityTrustUrl(url);
    // console.log(this.Url);
  }
}
