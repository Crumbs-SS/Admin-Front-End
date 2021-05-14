import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers_components/drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders_components/orders/orders.component';
import { RestaurantFormComponent } from './restaurant_components/restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './restaurant_components/restaurant-list/restaurant-list.component';
import { RestaurantsComponent } from './restaurant_components/restaurants/restaurants.component';
import { UsersComponent } from './user_components/users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'utopia/home',
    pathMatch: 'full'
  },
  {
    path: 'utopia/home',
    component: HomeComponent
  },
  {
    path: 'utopia/drivers',
    component: DriversComponent
  },
  {
    path: 'utopia/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'utopia/orders',
    component: OrdersComponent
  },
  {
    path: 'utopia/users',
    component: UsersComponent
  },
  {
    path: 'utopia/restaurants/listRestaurants',
    component: RestaurantListComponent
  },
  {
    path: 'utopia/restaurants/addRestaurant',
    component: RestaurantFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
