import { Injectable } from '@angular/core';
import { HeaderService } from '../headers/header.service';
import { Resolve } from '@angular/router';
import { key } from '../ConstURLs/apiKey';
import { urlPaths } from '../ConstURLs/urls';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutresolverService implements Resolve<any[]> {
  private newsUrl = urlPaths.headlines;
  private queryURL = {};
  public list$ = new Subject();
  public listObserver$ = this.list$.asObservable;
  constructor(private httpServices: HeaderService) { }

  public resolve(): any {
    return this.fetchNews();
  }

  fetchNews() {
    return this.httpServices.get(this.newsUrl, this.queryURL);
  }

  requestNews() {
    this.httpServices.get(this.newsUrl, this.queryURL).subscribe((resp:any) => {
      if (resp && Array.isArray(resp.articles)) {
        this.list$.next(resp.articles);
      }
    })
  }

  formUrl(countryCode, categoryCode): void {
    this.queryURL = {
      country:countryCode,
      category:categoryCode,
      apiKey: key
    }
  }
}
