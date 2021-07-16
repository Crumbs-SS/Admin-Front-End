import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { User } from 'src/app/Models/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {
  @Input() user: User = new User();

  constructor(private accountService: AccountService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  open(template: any){
    this.ngbModal.open(template);
  }

  deleteUser(){
    this.accountService.deleteUser(this.user.id).subscribe(console.log);
  }

}
