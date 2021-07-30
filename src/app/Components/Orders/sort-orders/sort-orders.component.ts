import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-orders',
  templateUrl: './sort-orders.component.html',
  styleUrls: ['./sort-orders.component.css']
})
export class SortOrdersComponent implements OnInit {

  @Output() newSortByEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  newSortBy(input: any){
    this.newSortByEvent.emit(input);
  }

}
