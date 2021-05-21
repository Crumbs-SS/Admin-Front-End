import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { userDetail } from 'src/app/Models/UserDetail';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  user: userDetail;

  @Output() newItemEvent = new EventEmitter<userDetail>();

  sendUserDetail(user: userDetail) {
    this.newItemEvent.emit(user);
  }
  
  constructor() {
    this.user = new userDetail();
   }

  ngOnInit(): void {
  }
  

}
