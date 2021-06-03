import { Component, Input,Output ,EventEmitter} from '@angular/core';
import { restaurantOwner } from 'src/app/Models/RestaurantOwner';
import { SortPipe } from 'src/app/Shared/Custom/sort.pipe';

@Component({
  selector: 'app-filter-price-rating',
  templateUrl: './filter-price-rating.component.html',
  styleUrls: ['./filter-price-rating.component.css']
})
export class FilterPriceRatingComponent  {

  @Output() newPriceRatingFilterEvent = new EventEmitter<number>();
  @Output() newRatingFilterEvent = new EventEmitter<number>();

  returnPriceValue(val:number){
    this.newPriceRatingFilterEvent.emit(val);
  }
  returnRatingValue(val:number){
    this.newRatingFilterEvent.emit(val);
  }

}
