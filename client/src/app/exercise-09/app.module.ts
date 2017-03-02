import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CharacterListComponent } from './character-list.component'
import { CharacterDetailComponent} from './character-detail.component'

import { DataService } from './data.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CharacterListComponent, CharacterDetailComponent ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
