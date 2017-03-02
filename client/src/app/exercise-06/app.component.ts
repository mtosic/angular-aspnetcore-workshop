import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

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

  hideDetails = false;

  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
