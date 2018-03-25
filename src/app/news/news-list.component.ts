import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { NewsStorageService } from '../shared/news-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from './article.model';

@Component({
    
        template: `
        <div class="container">
             <div class="row">
                <div class="col-md-4 col-sm-6" *ngFor="let article of articles">                
                    <app-news *ngIf="article.source === 'trending-news'"  [news]="article"></app-news>
            </div>
            </div>
        </div>
        `
    })
    
    export class NewsListComponent implements OnInit {
        articles: Article[];
        articleSource: string = 'Trending News';
        savedArticles: Article[];
        constructor(private newsStorageService: NewsStorageService, private newsService: NewsService, private route: ActivatedRoute) {
    
    }
        ngOnInit() {
    
           this.getSavedArticles(); 
    
            let tempArticles = this.route.snapshot.data['articles'];
            tempArticles = this.updateArticlesSource('trending-news', tempArticles);
            this.filterArticles(tempArticles);
    
        }
    
        updateArticlesSource(source: string, articles: Article[]): Article[] {
            if (source === 'trending-news') {
                this.articleSource = 'Trending News';
            } 
    
            articles.forEach(val => val.source = source);
            return articles;
    
        }
    
        getSavedArticles(): void {
            this.savedArticles = this.newsStorageService.getArticles(); 
        }
    
        filterArticles(temp: Article[]) {
            for (let i = 0; i < this.savedArticles.length; i++) {
                temp = temp.filter(news => news.title !== this.savedArticles[i].title);
            }
            this.articles = temp; 
        }
    
        getArticles(source: string): void {
            
            this.getSavedArticles();
            this.newsService.getNews().then(news => {
                let tempArticles = this.updateArticlesSource(source, news);
                this.filterArticles(tempArticles);
    
            });
    
        }
        
    }