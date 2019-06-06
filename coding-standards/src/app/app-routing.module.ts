import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardsSearchComponent } from './coding-standards-search/coding-standards-search/standards-search/standards-search.component';

const routes: Routes = [
  { path: '', component: StandardsSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
