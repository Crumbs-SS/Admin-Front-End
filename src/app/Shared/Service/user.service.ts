import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { ACCOUNT_SERVICE_URL } from '../Globals';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public accountURL: string;
    private token: any;
    private opts: object;

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
        this.accountURL = ACCOUNT_SERVICE_URL;
        this.token = this.authenticationService.tokenValue;
        this.opts = { headers: new HttpHeaders().set('Authorization', this.token) };
    }

    public getAll(searchString: string, sortDirection: string, sortField: string, status: string, pageSize: number, page: number)
        : Observable<any> {
        let params = new HttpParams();
        params = params.append('searchString', searchString);
        params = params.append('sortDirection', sortDirection);
        params = params.append('sortField', sortField);
        params = params.append('status', status);
        params = params.append('pageSize', pageSize.toString());
        params = params.append('page', page.toString());

        return this.http.get(this.accountURL + '/drivers',
            {
                headers: new HttpHeaders().set('Authorization', this.token),
                params
            });
    }

    public checkIfDriverIsAvailable(username: string) {
        return this.http.get(this.accountURL + `/drivers/${username}`, this.opts);
    }
}
