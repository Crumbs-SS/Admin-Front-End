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
  filterBy: string ='';
  orderBy: string ='asc';
  sortBy: string ='Id';
  totalPages = 0;
  query: string = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadAllUsers();
  }

  loadAllUsers(){    

    const extras = {
      query: this.query,
      sortBy: this.sortBy,
      orderBy: this.orderBy,
      filterBy: this.filterBy
    };

    this.accountService.getUsers(this.page, this.size, extras).subscribe(res => { 
      const content = res.content;    
      if(content) 
        this.users = content.map((user: User) => new User().deserialize(user));            
        this.totalUsers = res.totalElements;
        this.totalPages = res.totalPages - 1;
        if(this.page > this.totalPages && this.totalPages > 0){          
          this.page = this.totalPages;
          this.loadAllUsers();      
        }
    })

  }

  previousPage(){
    if(this.page > 0)
      this.page -= 1;
    else
      this.page = 0;

    this.loadAllUsers();
  }

  nextPage(){
    if(this.page < this.totalPages)
      this.page += 1;
    else
      this.page = this.totalPages

    this.loadAllUsers();
  }

  pageSelected(page: number){
    if(page <= this.totalPages || page >= 0)
      this.page = page;

    this.loadAllUsers();
  }

  newRole(role: string){
    this.filterBy = role;
    this.query = '';
    
    this.loadAllUsers();
  }

  newSort(sort: string){
    this.sortBy = sort;

    this.loadAllUsers();
  }

  newOrder(order: string){
    this.orderBy = order;

    this.loadAllUsers();
  }


}
