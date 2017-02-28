import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{title}}</h1>
    <img [src]="image" /> <br />
    <h2>This is {{name}} from house {{house}}.</h2>
    <label [style.color] = "color">Favorite color</label><br />
    <button (click)="hideDetailsClick()">Show/hide details</button><br />
    <select (change)="colorChange($event.target.value)">
        <option>red</option>
        <option>blue</option>
        <option>green</option>
    </select>
    <div [hidden]="hideDetails">
      <h3>Details</h3>
      <fieldset>
      <select (change)="houseChange($event.target.value)">
        <option>Arryn</option>
        <option>Frey</option>
        <option>Greyjoy</option>
        <option>Lannister</option>
        <option>Stark</option>
        <option>Tyrell</option>
      </select>
      </fieldset>
      <fieldset>
        <label>Dead: </label>{{dead}}
      </fieldset>
    </div>
    `,
})

export class AppComponent  { 
  title = 'Angular + ASP.NET Core workshop';
  name = "Tyrion";
  image = "./got.jpg";
  color = "red";
  house = "Lannister";
  dead = true;
  houses = ['Arryn', 'Frey', 'Greyjoy', 'Lannister', 'Stark', 'Tyrell'];
  hideDetails = false;

  colorChange(color: string) {
    this.color = color;
  }

  houseChange(house: string) {
    this.house = house;
  }

  hideDetailsClick() {
    this.hideDetails = !this.hideDetails;
  }
}
