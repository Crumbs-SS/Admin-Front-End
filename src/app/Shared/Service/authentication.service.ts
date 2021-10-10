import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<any>;
  private user: Observable<any>;
  private tokenSubject: BehaviorSubject<any>;
  private token: Observable<any>;
  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user') as string));
    this.user = this.userSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<any>(localStorage.getItem('token') as string);
    this.token = this.tokenSubject.asObservable();
    this.accountsUrl = 'http://application-load-balancer-2004143484.us-east-1.elb.amazonaws.com/account-service';
  }

  public get userValue(): any {
      return this.userSubject.value;
  }

  public get getUserSubject(): any {
      return this.userSubject;
  }

  public get tokenValue(): any {
      return this.tokenSubject.value;
  }

  loadUser(): void {
    this.http.get<any>(this.accountsUrl + '/users/' + localStorage.getItem('username') as string,
        {headers: new HttpHeaders().set('Authorization', this.tokenSubject.value), observe: 'response'})
        .subscribe(
            (data => {
              localStorage.setItem('user', JSON.stringify(data.body));
              this.userSubject.next(data.body);
            }),
            (() => {
                this.logout();
            })
        );
  }

  login(username: string, password: string): Observable<boolean> {
    const role = 'admin';
    return this.http.post<any>(this.accountsUrl + '/authenticate', {username, password, role}, {observe: 'response'})
        .pipe(map(
            data => {
                if (data) {
                    localStorage.setItem('token', data.headers.get('authorization') as string);
                    this.tokenSubject.next(data.headers.get('authorization'));
                    localStorage.setItem('username', data.headers.get('username') as string);
                    return true;
                }
                else {
                    this.logout();
                    return false;
                }
            }
        ));
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.userSubject.next(null);
    this.tokenSubject.next(null);
  }
}
