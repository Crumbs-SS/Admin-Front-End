import { Category } from "./Category";
import { MenuItem } from "./MenuItem";

export class RestaurantDetail{
    name!: string;
    priceRating!: number;
    categories!: Category[];
    menu!: MenuItem[];
}