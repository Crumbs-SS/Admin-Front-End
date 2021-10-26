import { Deserializable } from "./deserializable";

export class UpdateOrder implements Deserializable {

    public phone: string = '';
    public address: string = '';
    public deliverySlot: Date = new Date();
    public preferences: string = '';
    public orderStatus: string = '';
    public stripeID: string = '';
    public cartItems = [];

    deserialize(input: any): this {
        this.phone = input.phone;
        this.address = input.street;
        this.deliverySlot = input.deliverySlot;
        this.orderStatus = input.orderStatus;
        this.preferences = input.preferences;
        this.stripeID = input.stripeID;
        return this;
    }
}