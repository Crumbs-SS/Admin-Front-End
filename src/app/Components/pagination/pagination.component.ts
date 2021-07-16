import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() previous: EventEmitter<void> = new EventEmitter<void>();
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();

  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(number: number){
    this.selected.emit(number);
  }





}
