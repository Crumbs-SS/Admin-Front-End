import { MenuItem } from "./MenuItem";
import { RestaurantCategory } from "./RestaurantCategory";
import { restaurantOwner } from "./RestaurantOwner";

export interface Restaurant {
    id: number;
    name: string;
    priceRating: number;
    rating: number;
    restaurantOwner: restaurantOwner;
    location: Location;
    menu: MenuItem[];
    categories: RestaurantCategory[];

}