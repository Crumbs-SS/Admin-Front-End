import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-role',
  templateUrl: './filter-role.component.html',
  styleUrls: ['./filter-role.component.css']
})
export class FilterRoleComponent {

  @Output() newRoleEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  newRole(role: string){
    this.newRoleEvent.emit(role);
  }

}
