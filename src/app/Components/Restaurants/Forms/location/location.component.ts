import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RestaurantLocation } from 'src/app/Models/Location';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: RestaurantLocation;

  @Output() newItemEvent = new EventEmitter<RestaurantLocation>();

  sendLocation(location: RestaurantLocation) {
    this.newItemEvent.emit(location);
  }
  
  constructor() {
    this.location = new RestaurantLocation();
   }

  ngOnInit(): void {
  }
  
}
