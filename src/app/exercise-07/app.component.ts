import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <character-list></character-list>`
})
export class AppComponent  { title = 'Angular workshop'; }