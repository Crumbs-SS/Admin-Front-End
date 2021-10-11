import { MenuItem } from "./MenuItem";

export class RestaurantDTO {

    firstName!: string;
    lastName!: string;
    email!: string;
    username!: string;
    password!: string;
    phone!: string;

    street!: string;
    city!: string;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: string[];
}
