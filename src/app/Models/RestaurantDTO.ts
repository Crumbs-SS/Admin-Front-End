import { MenuItem } from "./MenuItem";

export class RestaurantDTO {

    ownerId!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    username!: string;
    password!: string;
    phone!: string;

    street!: string;
    city!: string;
    zip!: number;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: string[];
}
