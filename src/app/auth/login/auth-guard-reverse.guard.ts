import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';




import { NbAuthService } from '@nebular/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardReverseGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.router.navigate(['/pages/dashboard']); // Redirect to dashboard if authenticated
      return false; // Prevent access to login page
    }
    return true; // Allow access to login page if not authenticated
  }

}


