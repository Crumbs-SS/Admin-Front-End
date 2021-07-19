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
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';

//Service
import { RestaurantService } from './Shared/Service/restaurant.service';
import { UserService } from './Shared/Service/user.service';

//Components
import { AppComponent } from './app.component';
import {ViewDriversComponent} from './Components/Drivers/view-drivers/view-drivers.component';
import { OrdersComponent } from './Components/Orders/orders/orders.component';
import { RestaurantsComponent } from './Components/Restaurants/restaurants/restaurants.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AddRestaurantComponent } from './Components/Restaurants/add-restaurant/add-restaurant.component';
import { ViewRestaurantComponents } from './Components/Restaurants/view-restaurants/view-restaurants.component';
import { UpdateRestaurantComponent } from './Components/Restaurants/update-restaurant/update-restaurant.component';
import { ViewMenuComponent } from './Components/Restaurants/view-menu/view-menu.component';
import { DeleteRestaurantComponent } from './Components/Restaurants/delete-restaurant/delete-restaurant.component';
import { SortRestaurantsComponent } from './Components/Restaurants/sort-restaurants/sort-restaurants.component';
import { FilterPriceRatingComponent } from './Components/Restaurants/filter-price-rating/filter-price-rating.component';

//Pipes
import { SearchfilterPipe } from './Shared/Custom/searchfilter.pipe';
import { PriceFilterPipe } from './Shared/Custom/priceFilter.pipe';
import { RatingFilterPipe } from './Shared/Custom/ratingFilter.pipe';
import { StatusFilterPipe } from './Shared/Custom/statusFilter.pipe';
import { StateFilterPipe } from './Shared/Custom/stateFilter.pipe';
import { SortPipe } from './Shared/Custom/sort.pipe';
import {SortDriversComponent} from './Components/Drivers/sort-drivers/sort-restaurants.component';
import {FilterDriversComponent} from './Components/Drivers/filter-drivers/filter-drivers.component';
import {DriverNamePipe} from './Shared/Custom/driverNameSearch.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    ViewDriversComponent,
    SortDriversComponent,
    FilterDriversComponent,
    OrdersComponent,
    RestaurantsComponent,
    UsersComponent,
    AdminComponent,
    AddRestaurantComponent,
    ViewRestaurantComponents,
    SearchfilterPipe,
    PriceFilterPipe,
    RatingFilterPipe,
    StatusFilterPipe,
    StateFilterPipe,
    DriverNamePipe,
    SortPipe,
    UpdateRestaurantComponent,
    ViewMenuComponent,
    DeleteRestaurantComponent,
    SortRestaurantsComponent,
    FilterPriceRatingComponent,
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
    ReactiveFormsModule,
    MatStepperModule,
    MatRadioModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [RestaurantService, UserService, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
