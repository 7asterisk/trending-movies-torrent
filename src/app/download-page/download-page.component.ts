import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.scss']
})
export class DownloadPageComponent implements OnInit {


  constructor(public route: ActivatedRoute,
    public db: AngularFirestore, private sanitizer: DomSanitizer) {
  }
  movie;
  Url;
  name;
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.db.doc('thundred/' + id).valueChanges().subscribe(data => {
    this.movie = data;
      // console.log(this.movie);
      this.sanitize(this.movie.magnet);
    }
    );
  }
  sanitize(url: string) {
    this.Url = this.sanitizer.bypassSecurityTrustUrl(url);
    // console.log(this.Url);
  }
}
