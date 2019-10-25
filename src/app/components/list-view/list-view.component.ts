import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutresolverService } from '../../layout/layoutresolver.service';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  listView: Array<any> = [];
  listViewToggle: string = 'single';
  constructor(private actRouter: ActivatedRoute, private route: Router, private service: LayoutresolverService) { }
  ngOnInit() {
    if (this.actRouter.snapshot.data && this.actRouter.snapshot.data.resolveList.articles) {
      this.listView = this.actRouter.snapshot.data.resolveList.articles;
    }
    this.service.list$.subscribe((resp: Array<any>) => {
      this.listView = resp;
    });
  }

  redirectToArticle(selected) {
    this.route.navigate(['/articleview:id'], { queryParams: { article: JSON.stringify(selected) } });
  }

}
