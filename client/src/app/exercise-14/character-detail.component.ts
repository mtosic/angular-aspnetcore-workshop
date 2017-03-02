import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Character } from './character';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'character-detail',
  templateUrl: 'character-detail.component.html'
})

export class CharacterDetailComponent implements OnInit {

  hideDetails = false;
  houses: string[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.dataService.getHouses().subscribe(hs => {
        this.houses = hs;
      })
  }

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
