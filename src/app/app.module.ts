import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { LayoutresolverService } from './layout/layoutresolver.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleViewComponent,
    ListViewComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LayoutresolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
