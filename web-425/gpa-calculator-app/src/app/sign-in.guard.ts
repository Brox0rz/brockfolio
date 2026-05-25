/**
 * Title: sign-in.guard.ts
 * Author: Professor Richard Krasso
 * Modified by: Brock Hemsouvanh
 * Date: 05/04/2024
 * Description: Guard to handle routing protections based on authentication status.
 *              This guard checks if the user's session is active via cookies and either allows or restricts access to routes.
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieservice: CookieService) {

  }

  canActivate(
    //Checks if the user can activate a certain route based on authentication status.
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sessionUser = this.cookieservice.get('session_user');

      if (sessionUser) {
        return true;
      } else {
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }

}
