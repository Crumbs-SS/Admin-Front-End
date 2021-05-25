import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';

@Component({
  selector: 'app-sort-restaurants',
  templateUrl: './sort-restaurants.component.html',
  styleUrls: ['./sort-restaurants.component.css']
})
export class SortRestaurantsComponent{
  
  @Input() restaurants!: any;
  @Output() newSortEvent = new EventEmitter<any>();

  constructor(private sortPipe: SortPipe) { }

  returnSortedRestaurants(restaurants:any){
    this.newSortEvent.emit(this.restaurants)
  }
  sortPriceAscending() {
    this.restaurants = this.sortPipe.transform(this.restaurants, "asc", "priceRating")
    this.returnSortedRestaurants(this.restaurants);
  }
  sortPriceDescending(){
    this.restaurants = this.sortPipe.transform(this.restaurants, "desc", "priceRating")
    this.returnSortedRestaurants(this.restaurants);
  }
  sortRatingAscending() {
    this.restaurants = this.sortPipe.transform(this.restaurants, "asc", "rating")
    this.returnSortedRestaurants(this.restaurants);
  }
  sortRatingDescending(){
    this.restaurants = this.sortPipe.transform(this.restaurants, "desc", "rating")
    this.returnSortedRestaurants(this.restaurants);
  }

}
