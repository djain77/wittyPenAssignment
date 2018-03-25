import { ReadLaterListComponent } from './news/saved/read-later.component';
import { TheNextWebDetailsComponent } from './news-details/news-details.component';
import { TheNextWebResolver } from './news/news-resolver.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news/news-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full'},
  { path: 'news', component: NewsListComponent, resolve: {articles: TheNextWebResolver} },
  { path: 'saved', component: ReadLaterListComponent}, 
  { path: 'detailed/trending-news/:title', component: TheNextWebDetailsComponent, resolve: {articles: TheNextWebResolver} }
 
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
