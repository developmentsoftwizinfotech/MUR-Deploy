import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    const activeUser = JSON.parse(currentUser);
    if(activeUser){

    if (activeUser.email == 'Admin') {
      if (currentUser) {
        return true; // Allow access to the protected modules
      } else {
        this.router.navigate(['/login']);
        return false; // Redirect to the login page
      }
    }else{
      if (currentUser) {
        // this.router.navigate(['/pages/inventory/requisition']);
        return true; // Allow access to the protected modules
      } else {
        this.router.navigate(['/vendor-login']);
        return false; // Redirect to the login page
      }

    }
  }else{
    this.router.navigate(['/login']);
    return false; // Redirect to the login page
  }

  }
}
