import { Deserializable } from "./deserializable";

export class Location implements Deserializable {

    public city: string = '';
    public state: string = '';
    public street: string = '';


    deserialize(input: any): this {
        this.city = input.city;
        this.state = input.state;
        this.street = input.street;

        return this;
    }

    public toString() {
        return this.street + ' ' + this.city + ', ' + this.state;
    }

}