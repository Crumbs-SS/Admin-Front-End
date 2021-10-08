import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public accountURL: string;

    constructor(private http: HttpClient) {
        this.accountURL = 'application-load-balancer-2004143484.us-east-1.elb.amazonaws.com/account-service';
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
        return this.http.get(this.accountURL + '/drivers', {params});
    }

    public checkIfDriverIsAvailable(username: string){
        return this.http.get(this.accountURL + `/drivers/${username}`);
    }
}
