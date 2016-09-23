import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from'./auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        console.log(route.url);
        console.log(state.url);
        return true;
    }

}