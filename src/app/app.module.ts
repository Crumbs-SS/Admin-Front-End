//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';

//Service
import { RestaurantService } from './Shared/Service/restaurant.service';
import { AccountService } from './Shared/Service/account.service';

//Components
import { AppComponent } from './app.component';
import { DriversComponent } from './Components/Drivers/drivers/drivers.component';
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
import { EditUserFormComponent } from './Components/Users/edit-user-form/edit-user-form.component';

//Pipes
import { SearchfilterPipe } from './Shared/Custom/searchfilter.pipe';
import { PriceFilterPipe } from './Shared/Custom/priceFilter.pipe';
import { RatingFilterPipe } from './Shared/Custom/ratingFilter.pipe';
import { StatusFilterPipe } from './Shared/Custom/statusFilter.pipe';
import { SortPipe } from './Shared/Custom/sort.pipe';
import { PhoneFormatPipe } from './Shared/Custom/phone-format.pipe';
import { DeleteUsersComponent } from './Components/Users/delete-users/delete-users.component';
import { EnableUsersComponent } from './Components/Users/enable-users/enable-users.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { FilterRoleComponent } from './Components/Users/filter-role/filter-role.component';
import { SortUsersComponent } from './Components/Users/sort-users/sort-users.component';
import { OrderUsersComponent } from './Components/Users/order-users/order-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
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
    SortPipe,
    UpdateRestaurantComponent,
    ViewMenuComponent,
    DeleteRestaurantComponent,
    SortRestaurantsComponent,
    FilterPriceRatingComponent,
    PhoneFormatPipe,
    EditUserFormComponent,
    DeleteUsersComponent,
    EnableUsersComponent,
    PaginationComponent,
    FilterRoleComponent,
    SortUsersComponent,
    OrderUsersComponent,
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
    MatRadioModule
  ],
  providers: [RestaurantService, AccountService, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
