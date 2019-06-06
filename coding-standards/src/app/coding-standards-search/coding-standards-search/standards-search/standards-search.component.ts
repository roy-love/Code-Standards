import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standards-search',
  templateUrl: './standards-search.component.html',
  styleUrls: ['./standards-search.component.scss']
})
export class StandardsSearchComponent implements OnInit {
selectedLanguage: string;
languages: string[];
  constructor() { }

  ngOnInit() {
    this.languages = [];
    this.languages.push('C#');
    this.languages.push('JavaScript');
    this.languages.push('VB');
    this.languages.push('Java');
    this.languages.push('Rust');
  }

  selectLanguage(language: string) {
    console.log(language + 'selected');
    this.selectedLanguage = language;
  }

}
