import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsNextWebComponent } from './news/news.component';
import { NewsListComponent } from './news/news-list.component';
import { TheNextWebResolver } from './news/news-resolver.service';
import { NewsStorageService } from './shared/news-storage.service';
import { NewsService } from './shared/news.service';
import { TheNextWebDetailsComponent } from './news-details/news-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReadLaterListComponent } from './news/saved/read-later.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsNextWebComponent,
    NewsListComponent,
    TheNextWebDetailsComponent,
    ReadLaterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [TheNextWebResolver,
                NewsStorageService,
                TheNextWebResolver,
                NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
