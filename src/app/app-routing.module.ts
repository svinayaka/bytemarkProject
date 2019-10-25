import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { LayoutresolverService } from './layout/layoutresolver.service';


const routes: Routes = [
  { path: '', redirectTo: 'listView', pathMatch: 'full' },
  { path: 'listView', component: ListViewComponent, resolve: { resolveList: LayoutresolverService } },
  { path: 'articleview:id', component: ArticleViewComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
