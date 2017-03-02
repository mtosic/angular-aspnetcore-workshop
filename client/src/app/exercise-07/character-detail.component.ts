import { Component, Input } from '@angular/core';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'character-detail',
  templateUrl: 'character-detail.component.html'
})

export class CharacterDetailComponent {
  
  @Input()
  character: Character;

  houses:string[] = ['Arryn', 'Frey', 'Greyjoy', 'Lannister', 'Stark', 'Tyrell', 'Targaryen'];

  hideDetails = false;

  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
