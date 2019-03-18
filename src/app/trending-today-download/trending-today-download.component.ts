import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trending-today-download',
  templateUrl: './trending-today-download.component.html',
  styleUrls: ['./trending-today-download.component.scss']
})
export class TrendingTodayDownloadComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public db: AngularFirestore, private sanitizer: DomSanitizer) {
      }
  movie;
  Url;
  name;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.doc('ttoday/' + id).valueChanges().subscribe( data => {this.movie = data;
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
