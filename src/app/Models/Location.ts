import { Deserializable } from "./deserializable";

export class Location implements Deserializable {

    public city: string = '';
    public state: string = '';
    public street: string = '';
    public longitude: string = '';
    public latitude: string = '';


    deserialize(input: any): this {
        this.city = input.city;
        this.state = input.state;
        this.street = input.street;
        this.longitude = input.longitude;
        this.latitude = input.latitude;

        return this;
    }

    public toString() {
        return this.street + ', ' + this.city + ', ' + this.state;
    }

}