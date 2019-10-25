import { Component } from '@angular/core';
import { LayoutresolverService } from './layout/layoutresolver.service';

interface ICode {
  text: string,
  code: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Bytemark India news';
  public countrySelected:ICode = {text: 'India', code: 'in'};
  public categorySelected:ICode = { text: "Entertainment", code: 'entertainment' };
  public country:Array<ICode> = [{text: 'India', code: 'in'}];
  public category:Array<{text:string, code:string}> = [
    { text: "Business", code: 'business' },
    { text: "Entertainment", code: 'entertainment' },
    { text: "General", code: 'general' },
    { text: "Health", code: 'health' },
    { text: "Science", code: 'science' },
    { text: "Sports", code: 'sports' },
    { text: "Technology", code: 'technology' }
  ];
  constructor(private service: LayoutresolverService) { 
    this.service.formUrl(this.countrySelected.code, this.categorySelected.code);
  }
  
  public selectedCountry(selCountry): void {
    this.countrySelected = selCountry;
    this.service.formUrl(this.countrySelected.code, this.categorySelected.code);
    this.service.requestNews();
  }

  public selectedCategory(selCategory): void {
    this.categorySelected = selCategory;
    this.service.formUrl(this.countrySelected.code, this.categorySelected.code);
    this.service.requestNews();
  }
}
