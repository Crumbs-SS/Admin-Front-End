import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers_components/drivers/drivers.component';
import { RestaurantsComponent } from './restaurant_components/restaurants/restaurants.component';
import { OrdersComponent } from './orders_components/orders/orders.component';
import { UsersComponent } from './user_components/users/users.component';
import { RestaurantListComponent } from './restaurant_components/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant_components/restaurant-form/restaurant-form.component';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './shared/services/restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    RestaurantsComponent,
    OrdersComponent,
    UsersComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
