import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trending-today',
  templateUrl: './trending-today.component.html',
  styleUrls: ['./trending-today.component.scss']
})
export class TrendingTodayComponent implements OnInit {

  constructor(db: AngularFirestore, private sanitizer: DomSanitizer) {

    db.collection('ttoday').valueChanges().subscribe(data => this.movies = data
    );
   }
  movies;
  elements: any = [];
  headElements = ['Name', 'Info', 'Link'];
  searchText = { sname: '' };
  previous: string;
  ngOnInit() {
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


}
