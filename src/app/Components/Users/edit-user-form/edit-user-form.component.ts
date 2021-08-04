import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/Models/User';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/Shared/Service/account.service';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  @Input() user: User = new User();
  @Output() updatedUser: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private ngbModal: NgbModal, 
    private fb: FormBuilder,
    private accountService: AccountService) { }

  newUser: any;
  error: string = '';

  ngOnInit(): void {
    const commonValidators: Validators[] = [Validators.required]

    this.newUser = this.fb.group({
      firstName:[this.user.firstName, [
        ...commonValidators, 
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z']*$")
      ]],
      lastName:[this.user.lastName, [
        ...commonValidators, 
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z']*$")
      ]],
      username:[this.user.username, [
        ...commonValidators,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern("^[A-Za-z0-9]*$")
      ]],
      email:[this.user.email, [
        ...commonValidators,
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]],
      phone:[this.user.phone, [
        ...commonValidators, 
        Validators.pattern("^[0-9]*$"), 
        Validators.maxLength(10), 
        Validators.minLength(10)
      ]]
    })
  }

  openModal(template: any): void{
    this.ngbModal.open(template, { scrollable: true, size: 'xl' });
  }

  onSubmit(): void{
    const newUser: User = new User().deserialize(this.newUser.value)

    this.accountService.updateUser(newUser, this.user.id).subscribe((user) => {
      this.updatedUser.emit();
      this.ngbModal.dismissAll();
    }, ({error}) => this.error = error.message)
  }

  
  get email(){
    return this.newUser.get('email');
  }

  get firstName(){
    return this.newUser.get('firstName');
  }

  get lastName(){
    return this.newUser.get('lastName');
  }

  get username(){
    return this.newUser.get('username');
  }

  get phone(){
    return this.newUser.get('phone');
  }

}
