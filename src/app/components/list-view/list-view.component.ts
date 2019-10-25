import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  listView = [];
  constructor(private actRouter: ActivatedRoute, private route: Router) { }
  ngOnInit() {
    if (this.actRouter.snapshot.data && this.actRouter.snapshot.data.resolveList.articles) {
      this.listView = this.actRouter.snapshot.data.resolveList.articles;
    }
  }

  redirectToArticle(selected) {
    this.route.navigate(['/articleview:id'], { queryParams: { article: JSON.stringify(selected) } });
  }

}
