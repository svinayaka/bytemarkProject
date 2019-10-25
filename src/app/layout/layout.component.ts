import { Component, OnInit } from '@angular/core';
import { LayoutresolverService } from './layoutresolver.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public IndianNews = [];
  public serverError = '';
  constructor(private newsService: LayoutresolverService) { }
  ngOnInit() {
    this.newsService.fetchNews()
    .subscribe(
      this.onSuccess.bind(this),
      this.onError.bind(this)
    );
  }

  onSuccess(resp) {
    this.IndianNews = resp.articles;
  }
  onError(err) {
    this.serverError = err.error.message;
  }

}
