import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080';
   }
  public registerOwner(OwnerRegistration: any): Observable<any>{
    return this.http.post(this.accountsUrl + '/owners/register', OwnerRegistration );
  }
  // tslint:disable-next-line:typedef
  public ownerExists(username: string){
      return this.http.get(this.accountsUrl + '/owners/' + username);
  }

  public getUsers(page= 0, size= 5, {sortBy= '', orderBy= '', filterBy= '', query= ''}): Observable<any>{

    return this.http.get(this.accountsUrl +
       `/users?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}&query=${query}`);
  }

  // tslint:disable-next-line:typedef
  public updateUser(user: User, userId: number){
    return this.http.put(this.accountsUrl + `/users/${userId}`, user);
  }

  // tslint:disable-next-line:typedef
  public deleteUser(userId: number){
    return this.http.delete(this.accountsUrl + `/users/${userId}`);
  }

  // tslint:disable-next-line:typedef
  public deleteDriver(driverId: number){
    return this.http.delete(this.accountsUrl + `/drivers/${driverId}`);
  }

  // tslint:disable-next-line:typedef
  public enableUser(userId: number, enableUser: any){
    return this.http.put(this.accountsUrl + `/users/${userId}/status`, enableUser);
  }


}
