import { isEmptyBindingElement } from "typescript";
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
        if(this.customer && this.customer.userStatus.status !== 'DELETED')
            roles.push('Customer');
        if(this.admin && this.admin.userStatus.status !== 'DELETED')
            roles.push('Admin');
        if(this.driver && this.driver.userStatus.status !== 'DELETED')
            roles.push('Driver');
        if(this.owner && this.owner.userStatus.status !== 'DELETED')
            roles.push('Owner');
        if(roles.length === 0)
            roles.push('Deleted');
        
        return roles.join(', ');
    }

    public getAllRoles(){
        let roles: string[] = [];

        if(this.admin)
            roles.push('Admin');
        if(this.customer)
            roles.push('Customer');
        if(this.driver)
            roles.push('Driver');
        if(this.owner)
            roles.push('Owner');

        return roles;
    }

}