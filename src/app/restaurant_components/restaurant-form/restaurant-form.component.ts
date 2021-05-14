import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersComponent } from 'src/app/user_components/users/users.component';
import {FormControl} from '@angular/forms';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';
import { AddRestaurantDTO } from 'src/app/models/add-restaurant-dto';
import { Category } from 'src/app/models/category';
import { MenuItem } from 'src/app/models/menu-item';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent {

  addRestaurantDTO: AddRestaurantDTO;
  categories : Category[];
  submitted = false;

  catOptions: Category[];
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private httpService: RestaurantService) {
    this.addRestaurantDTO = new AddRestaurantDTO();
    this.categories = [];
    this.catOptions = [
      {name:"American"},
      {name:"Japanese"},
      {name:"Italian"},
      {name:"Pizza"},
      {name:"Burger"},
      {name:"Sushi"},
      {name:"Fast-Food"},
      {name:"Fine Dining"},
      {name:"Breakfast"},
      {name:"Healthy"}
    ]
    
  }

    onSubmit() {
      //this.addRestaurantDTO.menuItems = this.menuItems;
      this.httpService.save(this.addRestaurantDTO).subscribe(result => this.submitted = true);
      //.subscribe(result => this.gotoRestaurantList());
      //.subscribe(result => this.submitted = true);
      //this.submitted = true;
    }
   
    gotoRestaurantList() {
      this.router.navigate(['/utopia/restaurants/listRestaurants']);
    }

  

}
