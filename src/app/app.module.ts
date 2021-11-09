// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


// Service
import { RestaurantService } from './Shared/Service/restaurant.service';
import { UserService } from './Shared/Service/user.service';
import { AccountService } from './Shared/Service/account.service';

// Components
import { AppComponent } from './app.component';
import { ViewDriversComponent } from './Components/Drivers/view-drivers/view-drivers.component';
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
import { SortDriversComponent } from './Components/Drivers/sort-drivers/sort-drivers.component';
import { FilterDriversComponent } from './Components/Drivers/filter-drivers/filter-drivers.component';
import { DeleteUsersComponent } from './Components/Users/delete-users/delete-users.component';
import { EnableUsersComponent } from './Components/Users/enable-users/enable-users.component';
import { FilterRoleComponent } from './Components/Users/filter-role/filter-role.component';
import { SortUsersComponent } from './Components/Users/sort-users/sort-users.component';
import { OrderUsersComponent } from './Components/Users/order-users/order-users.component';
import { EditOrderComponent } from './Components/Orders/edit-order/edit-order.component';
import { DeleteOrderComponent } from './Components/Orders/delete-order/delete-order.component';
import { FilterOrderComponent } from './Components/Orders/filter-order/filter-order.component';
import { SortOrdersComponent } from './Components/Orders/sort-orders/sort-orders.component';
import { OrderByOrdersComponent } from './Components/Orders/order-by-orders/order-by-orders.component';

// Pipes
import { SearchfilterPipe } from './Shared/Custom/searchfilter.pipe';
import { PriceFilterPipe } from './Shared/Custom/priceFilter.pipe';
import { RatingFilterPipe } from './Shared/Custom/ratingFilter.pipe';
import { StatusFilterPipe } from './Shared/Custom/statusFilter.pipe';
import { StateFilterPipe } from './Shared/Custom/stateFilter.pipe';
import { SortPipe } from './Shared/Custom/sort.pipe';
import { DriverNamePipe } from './Shared/Custom/driverNameSearch.pipe';
import { PhoneFormatPipe } from './Shared/Custom/phone-format.pipe';
import { DeleteDriversComponent } from './Components/Drivers/delete-drivers/delete-drivers.component';
import { EnableDriversComponent } from './Components/Drivers/enable-drivers/enable-drivers.component';
import { AssignDriverComponent } from './Components/Orders/assign-driver/assign-driver.component';
import { LoginPageComponent } from './Components/Login/login-page/login-page/login-page.component';
import { HomeButtonComponent } from './Components/home-button/home-button.component';

// Guards
import { AuthGuard } from './Shared/Service/auth.guard';
import { NoAuthGuard } from './Shared/Service/no-auth.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FilterPriceRatingComponent,
    PhoneFormatPipe,
    EditUserFormComponent,
    DeleteUsersComponent,
    EnableUsersComponent,
    FilterRoleComponent,
    SortUsersComponent,
    OrderUsersComponent,
    EditOrderComponent,
    DeleteOrderComponent,
    FilterOrderComponent,
    SortOrdersComponent,
    OrderByOrdersComponent,
    DeleteDriversComponent,
    EnableDriversComponent,
    AssignDriverComponent,
    LoginPageComponent,
    HomeButtonComponent,
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
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FontAwesomeModule,
    MatIconModule,
    GooglePlaceModule
  ],
  providers: [RestaurantService, UserService, AccountService, SortPipe, AuthGuard, NoAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
