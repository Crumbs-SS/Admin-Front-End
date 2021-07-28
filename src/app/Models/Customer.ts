import { Deserializable } from "./deserializable";
import { User } from "./User";

export default class Customer implements Deserializable{

    public id: number = -1;
    public loyalPoints: number = 0;
    public userDetails: User = new User();
    public userStatus: string = '';

    deserialize(input: any): this{
        this.id = input.id;
        this.loyalPoints = input.loyalPoints;
        this.userDetails = new User().deserialize(input.userDetails);
        this.userStatus = input.userStatus;

        return this;
    }
}