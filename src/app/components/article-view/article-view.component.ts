import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Resolve  } from '@angular/router';

interface INews {
  title: string;
  publishedAt: string;
  description: string;
  urlToImage: string;
  content: string;
  author: string;
  url: string;
}

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  newsInformation: INews = {
    title: '',
    publishedAt: '',
    description: '',
    urlToImage: '',
    content: '',
    author: '',
    url: ''
  };
  constructor(private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRouter.queryParamMap.subscribe((param: any) => {
      this.newsInformation = JSON.parse(param.params.article);
    });
  }
  backNavigator() {
    this.router.navigate(['listView']);
  }

}
