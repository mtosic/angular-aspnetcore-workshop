import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { DataService} from './data.service';
import { LoggerService} from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.css']
})

export class CharacterListComponent implements OnInit {
  
  characters: Character[] = [];
  character: Character;
  isBusy = false;

  constructor(private dataService: DataService, private logger: LoggerService) {}

  //lifecycle
  ngOnInit() {
    this.logger.log("Getting characters...");
    this.isBusy = true;

    //this.dataService.getCharactersP().then(chars => {
    this.dataService.getCharacters().subscribe(chars => {
      this.isBusy = false;
      this.characters = chars;
    });
  }

  shift(increment: number) {
    // shift the index of the current character by the increment
    let ix = increment + this.characters.findIndex(c => c === this.character);

    // prevent index overflow
    ix = Math.min(this.characters.length - 1, Math.max(0, ix));

    // set next character
    this.character = this.characters[ix];
  }

  houses: string[] = ['Arryn', 'Frey', 'Greyjoy', 'Lannister', 'Stark', 'Tyrell', 'Targaryen'];
}
