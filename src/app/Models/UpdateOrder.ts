import { Deserializable } from "./deserializable";

export class UpdateOrder implements Deserializable{

    public phone: string = '';
    public address: string = '';
    public deliveryTime: Date = new Date();
    public preferences: string = '';
    public orderStatus: string = '';
    public cartItems = [];

    deserialize(input: any): this{
        this.phone = input.phone;
        this.address = input.street;
        this.deliveryTime = input.deliveryTime;
        this.orderStatus = input.orderStatus;
        this.preferences = input.preferences;
        return this;
    }
}