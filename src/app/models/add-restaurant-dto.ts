import { Category } from "./category"
import { MenuItem } from "./menu-item";

export class AddRestaurantDTO {
    
    ownerFirstName!: string;
    ownerLastName!: string;
    ownerEmail!: string;

    street!: string;
    city!: string;
    zip!: string;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: string;
    
    //menuItems: MenuItem[] = [];


    // constructor(
    //     ownerFirstName : string,
    //     ownerLastName: string,
    //     ownerEmail: string,
    //     street: string,
    //     city: string,
    //     zip: number,
    //     state:string,
    //     name:string,
    //     priceRating: 1,
    //     categories : Category[],
    //     menuItems: MenuItem[],
    // ){

    // }


}
