import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule}     from '@angular/http';

import { AppComponent }  from './app.component';
import { CharacterListComponent } from './character-list.component'
import { CharacterDetailComponent} from './character-detail.component'

import { DataService } from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService}   from './in-memory-data.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService)    
    ],
  declarations: [ AppComponent, CharacterListComponent, CharacterDetailComponent ],
  providers:    [ DataService, LoggerService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
