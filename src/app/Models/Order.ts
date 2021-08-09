import Customer from "./Customer";
import { Location } from "./Location";
import { Deserializable } from "./deserializable";

export class Order implements Deserializable{

    public createdAt: any;
    public customer: Customer = new Customer();
    public deliverySlot: Date = new Date();
    public isoTime: Date = new Date();
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
        this.deliverySlot = new Date(input.deliverySlot);
        this.driver = input.driver;
        this.foodOrders = input.foodOrders;
        this.orderStatus = input.orderStatus.status;
        this.payment = input.payment;
        this.preferences = input.preferences;
        this.restaurant = input.restaurant;
        this.phone = input.phone;
        this.id = input.id;
        this.isoTime = new Date(new Date(this.deliverySlot)
            .setHours(this.deliverySlot.getHours() - 5));
        
        if(input.customer)
            this.customer = new Customer().deserialize(input.customer);
        if(input.deliveryLocation)
            this.deliveryLocation = new Location().deserialize(input.deliveryLocation);


        return this;
    }

    
}