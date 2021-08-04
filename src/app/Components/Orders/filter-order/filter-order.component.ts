import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-order',
  templateUrl: './filter-order.component.html',
  styleUrls: ['./filter-order.component.css']
})
export class FilterOrderComponent implements OnInit {

  @Output() newStatusEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  newStatus(input: any){
    this.newStatusEmitter.emit(input);
  }



}
