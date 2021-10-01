import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-enable-drivers',
  templateUrl: './enable-drivers.component.html',
  styleUrls: ['./enable-drivers.component.css']
})
export class EnableDriversComponent implements OnInit {
  @Input() d: any;
  @Output() userEnabled: EventEmitter<void> = new EventEmitter<void>();
  constructor(private accountService: AccountService, private ngbModal: NgbModal) { }


  ngOnInit(): void {
  }

  open(template: any){
    this.ngbModal.open(template);
  }
  
  enableUser(){
    this.accountService.enableUser(this.d.userID, {driver: true}).subscribe(
      () => {
        this.userEnabled.emit();
        this.ngbModal.dismissAll();
      });
  }

}
