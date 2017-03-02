import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{name}}</h1>
    <h2>This is {{name}} from house {{house}}.</h2>
 
    <input [(ngModel)]="name"> [(ngModel)] binding <br />

    <button (click)="hideDetailsClick()">Show/hide details</button><br />
    <label><input type="checkbox" [(ngModel)]="hideDetails"/>Hide details</label><br/>
    <div [hidden]="hideDetails">
      <h3>Details</h3>
      <fieldset>
      <label>House:
        <select [ngModel]="house">
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
