import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/Models/User';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/Shared/Service/account.service';

@Component({
  selector: 'app-enable-users',
  templateUrl: './enable-users.component.html',
  styleUrls: ['./enable-users.component.css']
})
export class EnableUsersComponent implements OnInit {

  @Input() user: User = new User();
  @Output() userEnabled: EventEmitter<void> = new EventEmitter<void>();

  constructor(private ngbModal: NgbModal, private accountService: AccountService) { }

  roles: string[] = [];
  form: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.roles = this.user.getAllRoles();
    this.roles.forEach(role => 
      this.form.addControl(role, new FormControl(true)));    
  }

  enableUser(){
    const enableUser: any = {};

    Object.keys(this.form.value)
      .forEach(key => enableUser[key.toLowerCase()] = this.form.value[key]);
    
    this.accountService.enableUser(this.user.id, enableUser).subscribe(
      () =>{          
          this.userEnabled.emit();
          this.ngbModal.dismissAll();
        }
    )
  }

  open(template: any){
    this.ngbModal.open(template);
  }

}
