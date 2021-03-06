import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'character-list',
  templateUrl: 'character-list.component.html',
  styleUrls: ['character-list.component.css']
})

export class CharacterListComponent {

  characters: Character[] = [
    {
      id: 1,
      name: 'Tyrion',
      age: 39,
      house: 'Lannister',
      dead: false
    },
    {
      id: 2,
      name: 'Arya',
      age: 17,
      house: 'Stark',
      dead: false
    },
    {
      id: 3,
      name: 'Cersei',
      age: 43,
      house: 'Lannister',
      dead: false
    },
    {
      id: 4,
      name: 'Jon Snow',
      age: 22,
      house: 'Stark',
      dead: false
    },
    {
      id: 5,
      name: 'Daenerys',
      age: 22,
      house: 'Targaryen',
      dead: false
    },
    {
      id: 6,
      name: 'Bran',
      age: 16,
      house: 'Stark',
      dead: false
    }
  ];

  character: Character;

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
