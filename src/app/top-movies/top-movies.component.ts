import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {


  constructor(db: AngularFirestore, private sanitizer: DomSanitizer) {
    db.collection('thundred').valueChanges().subscribe(data => this.movies = data
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
