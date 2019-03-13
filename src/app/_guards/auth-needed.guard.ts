import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthNeededGuard implements CanActivate {
  constructor(private router: Router)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (!localStorage.getItem('access_token')) {
        // not logged in so return true
        return true;
      }

      this.router.navigate(['/profile']);
    return false;
  }
}
