import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/Models/Category';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';
import { userDetail } from 'src/app/Models/UserDetail';
import { RestaurantLocation } from 'src/app/Models/Location';
import { RestaurantDetail } from 'src/app/Models/RestaurantDetail';

@Component({
  selector: 'app-rud-restaurants',
  templateUrl: './rud-restaurants.component.html',
  styleUrls: ['./rud-restaurants.component.css']
})
export class RudRestaurantsComponent implements OnInit {

  restaurants: any;
  totalRestaurants = 0;
  searchString!: string;
  restaurant: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private HttpService: RestaurantService, private modalService: NgbModal
    // ,private sortPipe: SortPipe
  ) { }

  ngOnInit() {
    this.loadAllRestaurants();
  }

  loadAllRestaurants() {
    this.HttpService.getAll().subscribe((res) => {
      this.restaurants = res;
      this.totalRestaurants = this.restaurants.length;

    });
  }
  searchRestaurants() { }

  deleteRestaurant(id: any) {
    this.HttpService.delete(id).subscribe(
      (response) => { alert("Delete Successfull"); },
      (error) => {
        console.log(error)
        alert(error.error.message)
      },
    );
  }

  open(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }
  openUpdate(longContent: any, obj: any) {
    this.restaurant = obj;
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }
  reloadCurrentPage() {
    window.location.reload();
  }

  onSubmit() {
    this.HttpService.update(this.restaurant).subscribe(
      (response) => { alert("Update Successfull"); },
      (error) => {
        console.log(error)
        alert(error.error.message)
      },
    );
  }
  sortRestaurants() {
    //  this.restaurants = this.sortPipe.transform(this.restaurants.priceRating, "asc", "priceRating")

  }
  sendUserDetail(user: userDetail) {
    this.restaurant.restaurantOwner.userDetail.firstName = user.firstName;
    this.restaurant.restaurantOwner.userDetail.lastName = user.lastName;
    this.restaurant.restaurantOwner.userDetail.email = user.email;
  }
  sendLocation(location: RestaurantLocation) {
    this.restaurant.location.street = location.street;
    this.restaurant.location.city = location.city;
    this.restaurant.location.zip = location.zip;
    this.restaurant.location.state = location.state;
  }
  sendRestaurantDetail(restaurantDetail: RestaurantDetail) {
    this.restaurant.name = restaurantDetail.name;
    this.restaurant.priceRating = restaurantDetail.priceRating;
    this.restaurant.categories = restaurantDetail.categories;
  }


}

//   updateRestaurantForm!: FormGroup;
// initializeForms(){
//   this.updateRestaurantForm = new FormGroup({
//     name: new FormControl('', [Validators.required]),
//     priceRating: new FormControl('', [Validators.required]),
//     rating: new FormControl('')
//   })

// }
// openContent(longContent: any, obj: any) {
//     if(obj!=null){
//       this.updateRestaurantForm = this.fb.group({
//         name : obj.name,
//         rating: obj.rating,
//         priceRating: obj.priceRating


//       })
//     }
//     this.modalService.open(longContent, { scrollable: true , size: 'xxl'});
//   }