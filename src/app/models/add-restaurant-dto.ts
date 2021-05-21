import { Category } from "./Category";

export class AddRestaurantDTO {

    id!: number;
    firstName!: string;
    lastName!: string;
    email!: string;

    street!: string;
    city!: string;
    zip!: number;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: Category[];
    
    //menuItems: MenuItem[] = [];
}
