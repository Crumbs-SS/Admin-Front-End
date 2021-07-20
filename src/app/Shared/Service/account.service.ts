import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl : string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080';
   }
  public registerOwner(OwnerRegistration : any) :Observable<any>{
    return this.http.post(this.accountsUrl + "/owners/register",OwnerRegistration );
  }
  public ownerExists(username: string){
      return this.http.get(this.accountsUrl + '/owners/' + username);
  }
  
  public getUsers(page=0, size=5, {sortBy='', orderBy='', filterBy=''}) :Observable<any>{
    console.log(filterBy);
    
    return this.http.get(this.accountsUrl +
       `/users?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}`);
  }

  public updateUser(user: User, userId: number){
    return this.http.put(this.accountsUrl + `/users/${userId}`, user);
  }

  public deleteUser(userId: number){
    return this.http.delete(this.accountsUrl + `/users/${userId}`);
  }

  public enableUser(userId: number, enableUser: any){
    return this.http.put(this.accountsUrl + `/users/${userId}/status`, enableUser);
  }
}