import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  totalUsers = 0;
  page = 0;
  size = 5;

  constructor(private HttpService: AccountService) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(){
    this.HttpService.getUsers().subscribe(res => { 
      const content = res.content;    
      if(content) 
        this.users = content.map((user: User) => new User().deserialize(user));            
        this.totalUsers = res.totalElements;
    })
  }
}
