import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.chackAuthetication().pipe(
      tap(isAuthenticated => console.log('Authenticated:', isAuthenticated)),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(['./']);
        }
      }),
    );
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}
