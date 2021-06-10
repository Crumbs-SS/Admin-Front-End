import { MenuItem } from "./MenuItem";
import { Category } from 'src/app/Models/category';

export class RestaurantDTO {

    //id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;

    street!: string;
    city!: string;
    zip!: number;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: string[];
    //menuItems!: MenuItem[];
}
