import { Injectable } from '@angular/core';
import { HeaderService } from '../headers/header.service';
import { Resolve, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { key } from '../ConstURLs/apiKey';
import { urlPaths } from '../ConstURLs/urls';
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutresolverService implements Resolve<any[]> {
  private newsUrl = urlPaths.headlines;
  constructor(private httpServices: HeaderService) { }

  public resolve(route, state): any {
    return this.fetchNews();
  }

  fetchNews() {
    return this.httpServices.get(this.newsUrl + '?country=in&apiKey=' + key);
  }
}
