import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(db: AngularFirestore, private sanitizer: DomSanitizer) {
    db.collection('thundred').valueChanges().subscribe(data => this.topmovies = data);
    db.collection('tweek').valueChanges().subscribe(data => this.wmovies = data);
    db.collection('ttoday').valueChanges().subscribe(data => this.trmovies = data);
  }
  topmovies;
  wmovies;
  trmovies;
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
