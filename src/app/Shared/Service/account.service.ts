import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from './authentication.service';
import { ACCOUNT_SERVICE_URL } from '../Globals';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountsUrl: string;
  private token: any;
  private opts: object;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.accountsUrl = ACCOUNT_SERVICE_URL;
    this.token = this.authenticationService.tokenValue;
    this.opts = { headers: new HttpHeaders().set('Authorization', this.token) };
  }
  public registerOwner(OwnerRegistration: any): Observable<any> {
    return this.http.post(this.accountsUrl + '/register/owner', OwnerRegistration, this.opts);
  }
  // tslint:disable-next-line:typedef
  public ownerExists(username: string) {
    return this.http.get(this.accountsUrl + '/owners/' + username, this.opts);
  }

  public getUsers(page = 0, size = 5, { sortBy = '', orderBy = '', filterBy = '', query = '' }): Observable<any> {

    return this.http.get(this.accountsUrl +
      `/users?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&filterBy=${filterBy}&query=${query}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public updateUser(user: User, userId: number) {
    return this.http.put(this.accountsUrl + `/users/${userId}`, user, this.opts);
  }

  // tslint:disable-next-line:typedef
  public deleteUser(userId: number) {
    return this.http.delete(this.accountsUrl + `/users/${userId}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public deleteDriver(driverId: number) {
    return this.http.delete(this.accountsUrl + `/drivers/${driverId}`, this.opts);
  }

  // tslint:disable-next-line:typedef
  public enableUser(userId: number, enableUser: any) {
    return this.http.put(this.accountsUrl + `/users/${userId}/status`, enableUser, this.opts);
  }

  public getAvailableDrivers(page = 0, size = 5, { sortBy = '', orderBy = '', query = '' }) {
    return this.http.get(this.accountsUrl + `/drivers/available?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&query=${query}`, this.opts)
  }
}
