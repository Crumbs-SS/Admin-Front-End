import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-drivers',
  templateUrl: './sort-drivers.component.html',
  styleUrls: ['./sort-drivers.component.css']
})
export class SortDriversComponent{

  @Output() newSortEvent = new EventEmitter<string[]>();

  sortAlphabetical() {
    this.newSortEvent.emit(['asc', 'username']);
  }
  sortAlphabeticalReverse(){
    this.newSortEvent.emit(['desc', 'username']);
  }
  sortIdAscending() {
    this.newSortEvent.emit(['asc', 'id']);
  }
  sortIdDescending(){
    this.newSortEvent.emit(['desc', 'id']);
  }

}
