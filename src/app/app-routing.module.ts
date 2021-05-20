import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { DriversComponent } from './Components/Drivers/drivers/drivers.component';
import { OrdersComponent } from './Components/Orders/orders/orders.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { RestaurantsComponent } from './Components/Restaurants/restaurants/restaurants.component';
import { RudRestaurantsComponent } from './Components/Restaurants/rud-restaurants/rud-restaurants.component';
import { AddRestaurantComponent } from './Components/Restaurants/add-restaurant/add-restaurant.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'crumbs/admin',
    pathMatch: 'full'
  },
  {
    path: 'crumbs/admin',
    component: AdminComponent
  },
  {
    path: 'crumbs/admin/drivers',
    component: DriversComponent
  },
  {
    path: 'crumbs/admin/restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'crumbs/admin/orders',
    component: OrdersComponent
  },
  {
    path: 'crumbs/admin/users',
    component: UsersComponent
  },
  {
    path: 'crumbs/admin/restaurants/rudRestaurants',
    component: RudRestaurantsComponent
  },
  {
    path: 'crumbs/admin/restaurants/addRestaurant',
    component: AddRestaurantComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
