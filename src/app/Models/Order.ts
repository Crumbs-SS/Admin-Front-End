import Customer from "./Customer";
import { Location } from "./Location";
import { Deserializable } from "./deserializable";

export class Order implements Deserializable{

    public createdAt: any;
    public customer: Customer = new Customer();
    public deliveryTime: any;
    public deliveryLocation: Location = new Location();
    public driver: any;
    public foodOrders: any;
    public id: number = -1;
    public orderStatus: string = "";
    public payment: any;
    public phone: string = '';
    public preferences: string = '';
    public restaurant: any;


    deserialize(input: any): this{
        this.createdAt = new Date(input.createdAt).toLocaleString();
        this.customer = new Customer().deserialize(input.customer);
        this.deliveryLocation = new Location().deserialize(input.deliveryLocation);
        this.deliveryTime = new Date(input.deliveryTime).toLocaleString();
        this.driver = input.driver;
        this.foodOrders = input.foodOrders;
        this.orderStatus = input.orderStatus.status;
        this.payment = input.payment;
        this.preferences = input.preferences;
        this.restaurant = input.restaurant;
        this.phone = input.phone;
        this.id = input.id;


        return this;
    }

    
}