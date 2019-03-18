import { Component, OnInit, HostListener } from '@angular/core';
import { TrendingMoviesService } from '../trending-movies.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbTableService } from 'angular-bootstrap-md';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss']
})
export class TrendingMoviesComponent implements OnInit {


  constructor(db: AngularFirestore, private sanitizer: DomSanitizer) {
    db.collection('tweek').valueChanges().subscribe(data => this.movies = data
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
