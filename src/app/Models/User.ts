import { PhoneFormatPipe } from "../Shared/Custom/phone-format.pipe";
import { Deserializable } from "./deserializable";

export class User implements Deserializable{
    public firstName: string = '';
    public lastName: string = '';
    public customer: any;
    public admin: any;
    public driver: any;
    public owner: any;
    public email: string = '';
    public phone: string = '';
    public username: string = '';
    public id: number = -1;

    deserialize(input: any): this {
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.customer = input.customer;
        this.admin = input.admin;
        this.driver = input.driver;
        this.owner = input.owner;
        this.email = input.email;
        this.phone = input.phone;
        this.username = input.username;
        this.id = input.id;
        
        return this;
    }

    public getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    public getRoles(){
        let roles: String[] = [];
        if(this.customer)
            roles.push('Customer');
        if(this.admin)
            roles.push('Admin');
        if(this.driver)
            roles.push('Driver');
        if(this.owner)
            roles.push('Owner');
        return roles.join(', ');
    }
}