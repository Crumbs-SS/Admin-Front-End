import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { ViewDriversComponent} from './Components/Drivers/view-drivers/view-drivers.component';
import { OrdersComponent } from './Components/Orders/orders/orders.component';
import { UsersComponent } from './Components/Users/users/users.component';
import { RestaurantsComponent } from './Components/Restaurants/restaurants/restaurants.component';
import { ViewRestaurantComponents } from './Components/Restaurants/view-restaurants/view-restaurants.component';
import { AddRestaurantComponent } from './Components/Restaurants/add-restaurant/add-restaurant.component';
import {LoginPageComponent} from './Components/Login/login-page/login-page/login-page.component';
import {AuthGuard} from './Shared/Service/auth.guard';
import {NoAuthGuard} from './Shared/Service/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crumbs/admin',
    pathMatch: 'full'
  },
  {
    path: 'crumbs/admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/login',
    component: LoginPageComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'crumbs/admin/drivers',
    component: ViewDriversComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/restaurants',
    component: RestaurantsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/users',
    component: UsersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/restaurants/viewRestaurants',
    component: ViewRestaurantComponents,
    canActivate: [AuthGuard],
  },
  {
    path: 'crumbs/admin/restaurants/addRestaurant',
    component: AddRestaurantComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
