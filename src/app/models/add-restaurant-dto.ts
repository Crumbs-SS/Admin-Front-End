import { Category } from "./category"

export class AddRestaurantDTO {

    id!: number;
    ownerFirstName!: string;
    ownerLastName!: string;
    ownerEmail!: string;

    street!: string;
    city!: string;
    zip!: number;
    state!: string;

    name!: string;
    priceRating!: number;
    categories!: Category[];
    
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
