import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodingStandardsSearchModule } from './coding-standards-search/coding-standards-search/coding-standards-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CodingStandardsSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
