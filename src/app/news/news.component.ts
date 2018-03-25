import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsStorageService } from '../shared/news-storage.service';
import { Article } from './article.model'; 

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})

export class NewsNextWebComponent {
    @Input() news: Article;
    @Input() isSaved: boolean;
    @Output() eventClick = new EventEmitter();
    @Output() likeCount: number = 0;
    favourite = false;
    isLiked = false;
    wasClicked = false;  
   
    constructor(private newsStorage: NewsStorageService) {
      
    }   

    likePost(article : Article): void {
      this.isLiked = true;
      this.wasClicked= !this.wasClicked;
      article.likes=  this.likeCount++;
    }

    save(article: Article): void {
      this.favourite = !this.favourite
      if(this.favourite === true){
        article.isSaved = true;   
      
      }
      else{
        article.isSaved = false;
      }
      this.newsStorage.saveArticle(article);
    }
    
    removeOnClick(article: Article): void {
        this.remove(article);
        this.eventClick.emit();
    }

    remove(article: Article): void {
        this.newsStorage.removeArticle(article);
    }

}