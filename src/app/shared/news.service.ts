import { Injectable } from '@angular/core';


@Injectable()
export class NewsService {
    get(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            var req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = () => {
                if (req.status === 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };

            req.onerror = () => {
                reject(Error('Network Error'));
            };

            req.send();
        });

    }

    getJSON(url: string): Promise<any> {
        return this.get(url).then(JSON.parse).catch(error => {
            console.log('getJSON failed for', url, error);
            throw error;
        });
    }

    getNews(): Promise<any> {
        
         // url for top headlines
        let url= 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6cbf745b21cb4f8c917f7a1d493a35cd';
        return this.getJSON(url).then(news => news.articles);
    }
                
}
