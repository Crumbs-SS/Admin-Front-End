import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-users',
  templateUrl: './sort-users.component.html',
  styleUrls: ['./sort-users.component.css']
})
export class SortUsersComponent {

  @Output() newSortEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  newSort(sortOption: string){
    this.newSortEvent.emit(sortOption);
  }
}
