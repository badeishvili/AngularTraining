import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './RoutingEx/home/home.component';
import { AboutComponent } from './RoutingEx/about/about.component';
import { NewsComponent } from './RoutingEx/news/news.component';
import { PageNotFoundComponent } from './RoutingEx/page-not-found/page-not-found.component';
import {AppRoutingModule, routes} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    PageNotFoundComponent,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
