import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Resolve  } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {
  newsInformation = {};
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
