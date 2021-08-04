import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { RestaurantDTO } from 'src/app/Models/RestaurantDTO';
import { OwnerRegistrationDTO } from 'src/app/Models/OwnerRegistrationDTO';
import { Category } from 'src/app/Models/category';
import { AccountService } from 'src/app/Shared/Service/account.service';
import { MatRadioChange } from '@angular/material/radio';
import { MatStepper } from '@angular/material/stepper';
import { ExistingOwnerDTO } from 'src/app/Models/ExistingOwnerDTO';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {

  addRestaurantDTO: RestaurantDTO;
  ownerRegistrationDTO: OwnerRegistrationDTO;
  existingOwnerDTO: ExistingOwnerDTO;
  newOwner !: boolean;

  locationError: boolean = false;
  errorMessage: string = "";

  categories: Category[] = [];

  constructor(
    private router: Router,
    private restaurantService: RestaurantService, private accountService: AccountService) {
    this.addRestaurantDTO = new RestaurantDTO();
    this.ownerRegistrationDTO = new OwnerRegistrationDTO();
    this.existingOwnerDTO = new ExistingOwnerDTO();
  }
  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.restaurantService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }
  onSubmit() {
    this.locationError = false;

    this.restaurantService.save(this.addRestaurantDTO).subscribe(
      (response) => {
        console.log(response);
        this.gotoRestaurantList();
      },
      (error) => {
        console.log(error)
        if (error.error.message.includes("location")) {
          this.locationError = true;
        }
      }
    );
  }

  gotoRestaurantList() {
    this.router.navigate(['crumbs/admin/restaurants/viewRestaurants']);
  }
  onChange(change: MatRadioChange) {
    this.newOwner = change.value;
    this.errorMessage = "";
    this.existingOwnerDTO.username="";
    this.ownerRegistrationDTO.firstName="";
    this.ownerRegistrationDTO.lastName="";
    this.ownerRegistrationDTO.email="";
    this.ownerRegistrationDTO.username="";
    this.ownerRegistrationDTO.password="";
    this.ownerRegistrationDTO.phone="";
  }

  checkUser(stepper: MatStepper) {

    if (this.newOwner) {
      this.accountService.registerOwner(this.ownerRegistrationDTO).subscribe(
        (response: any) => {
          this.addRestaurantDTO.ownerId = response;
          stepper.next();
        },
        (error: any) => {
          this.errorMessage = error.error.message;
          console.log(error);
        }
      );
    }
    else {
      this.accountService.ownerExists(this.existingOwnerDTO.username).subscribe(
        (response: any) => {
          this.addRestaurantDTO.ownerId = response;
          stepper.next();
        },
        (error: any) => {
          this.errorMessage = error.error.message;
          console.log(error.error.message)
        }
      )
    }
  }
}
