//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';

//Service
import { RestaurantService } from './Shared/Service/restaurant.service';

//Components
import { AppComponent } from './app.component';

import { DriversComponent } from './Components/Drivers/drivers/drivers.component';
import { OrdersComponent } from './Components/Orders/orders/orders.component';
import { RestaurantsComponent } from './Components/Restaurants/restaurants/restaurants.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AddRestaurantComponent } from './Components/Restaurants/add-restaurant/add-restaurant.component';
import { RudRestaurantsComponent } from './Components/Restaurants/rud-restaurants/rud-restaurants.component';

//Pipes
import { SearchfilterPipe } from './Shared/Custom/searchfilter.pipe';
import { PriceRatingSortPipe } from './Shared/Custom/price-rating-sort.pipe'
import { RestaurantSortPipe } from './Shared/Custom/restaurant-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSortPipe,
    DriversComponent,
    OrdersComponent,
    RestaurantsComponent,
    UsersComponent,
    AdminComponent,
    AddRestaurantComponent,
    RudRestaurantsComponent,
    SearchfilterPipe,
    PriceRatingSortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
