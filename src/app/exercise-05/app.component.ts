import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent  {
  character: Character = {
    id: 1,
    name: 'Tyrion',
    age: 39,
    house: 'Lannister',
    dead: false
  }

  hideDetails = false;

  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
