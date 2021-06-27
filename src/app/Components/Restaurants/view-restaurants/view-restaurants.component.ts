import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/Shared/Service/restaurant.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-restaurants',
  templateUrl: './view-restaurants.component.html',
  styleUrls: ['./view-restaurants.component.css']
})
export class ViewRestaurantComponents implements OnInit {

  restaurants: any;
  totalRestaurants = 0;
  searchString!: string;
  price!: number;
  rating!: number;
  status!: String;

  constructor(private route: ActivatedRoute, private router: Router,
    private HttpService: RestaurantService, private modalService: NgbModal) {}

  ngOnInit() {
    this.loadAllRestaurants();
  }
  loadAllRestaurants() {
    this.HttpService.getAll().subscribe(res => {
      this.restaurants = res.content;
      this.totalRestaurants = this.restaurants.length;
    });
  }
  returnRestaurants(restaurants:any){
    this.restaurants = restaurants;
  }
  returnPriceValue(val:number){
    this.price = val;
  }
  returnRatingValue(val:number){
    this.rating = val;
  }
  returnStatusValue(val: String){
    this.status = val;
  }

}
