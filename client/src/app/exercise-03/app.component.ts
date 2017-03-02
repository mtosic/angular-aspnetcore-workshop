import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <h2>This is {{name}} from house {{house}}.</h2>
    <input [value]="name"> Property binding <br/>
    <input #charName [value]="name" (input)="name=charName.value"> Property+event binding (selector) <br />
    <input [value]="name" (keyup)="name=$event.target.value"> Keyup + $event.target <br />
    <input [value]="name" (keyup.enter)="name=$event.target.value"> Keyup.enter + $event.target <br />
    <input [value]="name" (blur)="name=$event.target.value"> Blur + $event.target <br />
    <input [value]="name" 
      (blur)="name=$event.target.value"
      (keyup.enter)="name=$event.target.value"> Blur + keyup.enter + $event.target <br />
    
    <input [(ngModel)]="name"> [(ngModel)] binding <br />

    <button (click)="hideDetailsClick()">Show/hide details</button><br />
    <div [hidden]="hideDetails">
      <h3>Details</h3>
      <fieldset>
      <label>House:
        <select (change)="houseChange($event.target.value)">
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
        <label>Dead: </label>{{dead}}
      </fieldset>
    </div>
    `,
})

export class AppComponent  { 
  name = "Tyrion";
  house = "Lannister";
  dead = true;
  hideDetails = false;

  houseChange(house: string) {
    this.house = house;
  }

  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
