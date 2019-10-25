import { Component, OnInit } from '@angular/core';
import { LayoutresolverService } from './layoutresolver.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public IndianNews = [];
  constructor(private newsService: LayoutresolverService) { }
  ngOnInit() {
    this.newsService.fetchNews()
    .subscribe((resp: {articles: []}) => {
      this.IndianNews = resp.articles;
    });
  }

}
