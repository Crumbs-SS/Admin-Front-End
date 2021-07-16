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
  totalPages = 0;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(){
    this.accountService.getUsers(this.page, this.size).subscribe(res => { 
      const content = res.content;    
      if(content) 
        this.users = content.map((user: User) => new User().deserialize(user));            
        this.totalUsers = res.totalElements;
        this.totalPages = res.totalPages;
    })
  }

  previousPage(){
    if(this.page > 0)
      this.page -= 1;
    else
      this.page = 0;

    console.log(this.page);
    this.loadAllUsers();
  }

  nextPage(){
    if(this.page < this.totalPages)
      this.page += 1;
    else
      this.page = this.totalPages

    console.log(this.page);
    this.loadAllUsers();
  }

  pageSelected(page: number){
    if(page <= this.totalPages || page >= 0)
      this.page = page;

    console.log(page);
    this.loadAllUsers();
  }

}
