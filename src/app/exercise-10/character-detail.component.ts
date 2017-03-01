import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'character-detail',
  templateUrl: 'character-detail.component.html'
})

export class CharacterDetailComponent {

  houses: string[] = ['Arryn', 'Frey', 'Greyjoy', 'Lannister', 'Stark', 'Tyrell', 'Targaryen'];
  hideDetails = false;

  @Input()
  character: Character;

  @Output()
  shift = new EventEmitter<number>();
  
  left() {
    this.shift.emit(-1);
  }

  right() {
    this.shift.emit(1);
  }


  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
