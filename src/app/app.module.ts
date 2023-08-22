import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { APP_INITIALIZER } from '@angular/core';
import { ConfigService } from './services/config.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { EventResultsComponent } from './components/event-results/event-results.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { NewsResultsComponent } from './components/news-results/news-results.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ProgramResultsComponent } from './components/program-results/program-results.component';
import { ProgramItemComponent } from './components/program-item/program-item.component';
import { ImageResultsComponent } from './components/image-results/image-results.component';
import { ImageItemComponent } from './components/image-item/image-item.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    EventResultsComponent,
    EventItemComponent,
    NewsResultsComponent,
    NewsItemComponent,
    ProgramResultsComponent,
    ProgramItemComponent,
    ImageResultsComponent,
    ImageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService, Router],
      useFactory: initializeApp,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeApp(configService: ConfigService, router: Router): () => Observable<any> {
  return () => configService.loadAppConfig(router);
}
