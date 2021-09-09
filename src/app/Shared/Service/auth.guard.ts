import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    authenticationService.getUserSubject.subscribe(((val: any) => {
      this.isAuthenticated = !!val;
    }));
  }

  // tslint:disable-next-line:typedef
  canActivate() {
    if (this.authenticationService.tokenValue) {
      return true;
    }
    else {
      this.router.navigateByUrl('/crumbs/admin/login');
      return false;
    }
  }

}
