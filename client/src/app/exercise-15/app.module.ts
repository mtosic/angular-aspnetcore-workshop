import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterDetailComponent } from './character-detail.component';
import { PageNotFoundComponent} from './page-not-found.component';

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'characters',
        component: CharacterListComponent
      },
      {
        path: '',
        redirectTo: '/characters',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ])
    //InMemoryWebApiModule.forRoot(InMemoryDataService)    
  ],
  declarations: [
    AppComponent, 
    CharacterListComponent, 
    CharacterDetailComponent,
    PageNotFoundComponent
    ],
  providers: [DataService, LoggerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
