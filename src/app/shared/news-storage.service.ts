import { Injectable } from '@angular/core';
import { Article } from '../news/article.model';


@Injectable()
export class NewsStorageService {
    savedArticles: Article[] = [];
    customNews: Article[] = [];

    saveArticle(article: Article): void {
        if(article.isSaved == true){
            this.savedArticles.push(article);
            localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
        }
        else {
           this.removeArticle(article);
         }
    }

 /*   saveLike(article: Article): void {
        this.savedArticles = JSON.parse(localStorage.getItem('Read later')) || [];
        this.savedArticles.forEach(savedArticle => {
            if(savedArticle.url == article.url){
                savedArticle.likes = article.likes;
                console.log(article.likes + ' & ' + savedArticle.likes)
                this.savedArticles.push(savedArticle);
                
                localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
            }
        });
    }
*/
    saveListArticles(articles: Article[]): void {
        this.savedArticles = articles;
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
        
    }

    getArticles(): Article[] {        
        return this.savedArticles = JSON.parse(localStorage.getItem('Read later')) || [];
    }

    removeArticle(article: Article): void {
        this.getArticles();
        this.savedArticles = this.savedArticles.filter(news => news.title !== article.title);
        localStorage.setItem('Read later', JSON.stringify(this.savedArticles));
    }

    clearStorage(): Article[] {
        this.savedArticles.length = 0;
        localStorage.removeItem('Read later');
        return this.savedArticles;
    }
}
