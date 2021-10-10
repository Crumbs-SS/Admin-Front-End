import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from 'src/app/Models/User';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl: string;
  private token: any;
  private opts: object;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.accountsUrl = 'application-load-balancer-773890590.us-east-1.elb.amazonaws.com/account-service';
    this.token = this.authenticationService.tokenValue;
    this.opts = {headers: new HttpHeaders().set('Authorization', this.token)};
   }
  public registerOwner(OwnerRegistration: any): Observable<any>{
    return this.http.post(this.accountsUrl + '/owners/register', OwnerRegistration, this.opts);
  }
  // tslint:disable-next-line:typedef
  public ownerExists(username: string){
      return this.http.get(this.accountsUrl + '/owners/' + username, this.opts);
  }

  public getUsers(page= 0, size= 5, {sortBy= '', orderBy= '', filterBy= '', query= ''}): Observable<any>{

    return this.http.get(this.accountsUrl +
       `/users?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}&query=${query}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public updateUser(user: User, userId: number){
    return this.http.put(this.accountsUrl + `/users/${userId}`, user, this.opts);
  }

  // tslint:disable-next-line:typedef
  public deleteUser(userId: number){
    return this.http.delete(this.accountsUrl + `/users/${userId}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public deleteDriver(driverId: number){
    return this.http.delete(this.accountsUrl + `/drivers/${driverId}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public enableUser(userId: number, enableUser: any){
    return this.http.put(this.accountsUrl + `/users/${userId}/status`, enableUser, this.opts);
  }
}
