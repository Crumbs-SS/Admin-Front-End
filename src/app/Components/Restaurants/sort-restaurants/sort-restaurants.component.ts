import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';

@Component({
  selector: 'app-sort-restaurants',
  templateUrl: './sort-restaurants.component.html',
  styleUrls: ['./sort-restaurants.component.css']
})
export class SortRestaurantsComponent{
  
  @Input() restaurants!: any[];
  @Output() newSortEvent = new EventEmitter<any>();

  constructor(private sortPipe: SortPipe) { }

  returnRestaurants(restaurants:any){
    this.newSortEvent.emit(this.restaurants)
  }
  sortPriceAscending() {
    this.restaurants = this.sortPipe.transform(this.restaurants, "asc", "priceRating")
    this.returnRestaurants(this.restaurants);
  }
  sortPriceDescending(){
    this.restaurants = this.sortPipe.transform(this.restaurants, "desc", "priceRating")
    this.returnRestaurants(this.restaurants);
  }
  sortRatingAscending() {
    this.restaurants = this.sortPipe.transform(this.restaurants, "asc", "rating")
    this.returnRestaurants(this.restaurants);
  }
  sortRatingDescending(){
    this.restaurants = this.sortPipe.transform(this.restaurants, "desc", "rating")
    this.returnRestaurants(this.restaurants);
  }

}
