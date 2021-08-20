import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-delete-drivers',
  templateUrl: './delete-drivers.component.html',
  styleUrls: ['./delete-drivers.component.css']
})
export class DeleteDriversComponent  {
  @Input() d: any;
  @Output() userDeleted: EventEmitter<void> = new EventEmitter<void>();
  constructor(private accountService: AccountService, private ngbModal: NgbModal) { }


  open(template: any){
    this.ngbModal.open(template);
  }

  deleteUser(){
    this.accountService.deleteDriver(this.d.id).subscribe(
      () => {
        this.userDeleted.emit();
        this.ngbModal.dismissAll();
      }, () => {});
  }
}
