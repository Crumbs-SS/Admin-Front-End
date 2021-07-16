import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() userDeleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private accountService: AccountService, private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  open(template: any){
    this.ngbModal.open(template);
  }

  deleteUser(){
    this.accountService.deleteUser(this.user.id).subscribe(
      () => {
        this.userDeleted.emit();
        this.ngbModal.dismissAll();
      });
  }

}
