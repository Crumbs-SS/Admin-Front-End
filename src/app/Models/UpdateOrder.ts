import { Deserializable } from "./deserializable";

export class UpdateOrder implements Deserializable {

    public phone: string = '';
    public address: string = '';
    public deliverySlot: Date = new Date();
    public preferences: string = '';
    public orderStatus: string = '';
    public stripeID: string = '';
    public latitude: number = 0;
    public longitude: number = 0;
    public cartItems = [];

    deserialize(input: any): this {
        this.phone = input.phone;
        this.deliverySlot = input.deliverySlot;
        this.orderStatus = input.orderStatus;
        this.preferences = input.preferences;
        this.stripeID = input.stripeID;
        this.address = input.validatedAddress.formatted_address;
        this.latitude = input.validatedAddress.geometry.location.lat();
        this.longitude = input.validatedAddress.geometry.location.lng();

        return this;
    }
}