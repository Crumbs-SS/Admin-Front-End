import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'menuItemForm',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class MenuItemFormComponent {
  submitted =false;
  menuItems : MenuItem[];
  menuItem : MenuItem;
  menuItemID =1;

  constructor() { 
    this.menuItems = [];
    this.menuItem = new MenuItem();
    this.menuItem.id = this.menuItemID;
  }
  onSubmit(form: NgForm){
    this.menuItems.push(this.menuItem)
    this.menuItemID++;
    this.menuItem.id = this.menuItemID;
    form.reset();
    //this.submitted = true;

  }
  
}

