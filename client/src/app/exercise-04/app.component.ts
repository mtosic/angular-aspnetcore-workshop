import { Component } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{character.name}}</h1>
    <h2>This is {{character.name}} from house {{character.house}}, aged {{character.age}}.</h2>
    
    <fieldset>
      <label>Name: <input [(ngModel)]="character.name"> <br /> </label>
      <label>Age: <input [(ngModel)]="character.age"> <br /> </label>
    </fieldset>

    <button (click)="hideDetailsClick()">Show/hide details</button><br />
    <label><input type="checkbox" [(ngModel)]="hideDetails"/>Hide details</label><br/>
    <div [hidden]="hideDetails">
      <h3>Details</h3>
      <fieldset>
      <label>House:
        <select [(ngModel)]="character.house">
          <option>Arryn</option>
          <option>Frey</option>
          <option>Greyjoy</option>
          <option>Lannister</option>
          <option>Stark</option>
          <option>Tyrell</option>
        </select>
      </label>
      </fieldset>
      <fieldset>
        <label>Dead: </label>{{character.dead}}
      </fieldset>
    </div>
    `,
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
