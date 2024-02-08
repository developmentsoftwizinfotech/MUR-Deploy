import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  baseUrl = environment.baseApiUrl
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private http: HttpClient
  ) { }

  switchTheme(theme: string) {

    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }
  notificationMenu(menuItems) {
    alert(menuItems)
  }
  Logout(menuItems) {

    const currentUser = localStorage.getItem('currentUser');
    const activeUser = JSON.parse(currentUser);
    if (activeUser.email == 'Admin') {
      if (menuItems === 'Log out') {
        localStorage.removeItem('currentUser');

        // Redirect to the login page
        this.router.navigate(['/login']);
      }

    } else {

      if (menuItems === 'Log out') {
        localStorage.removeItem('currentUser');

        // Redirect to the login page
        this.router.navigate(['/vendor-login']);
      }
    }

    // if (menuItems === 'Log out') {
    //   localStorage.removeItem('currentUser');

    //   // Redirect to the login page
    //   this.router.navigate(['/login']);
    // }
  }

  getNotificationMenu(vendorId) {
   return this.http.get(this.baseUrl + `VendorNotificationListWithVendorId?vendorId=${vendorId}`)
  }


  moveToAllNotificationMenu(vendorId){
    this.router.navigate(['/pages/notification/'+vendorId]);
  }

  getRequisitionNotification(){
    return this.http.get(this.baseUrl + `GetOwnerNotificationList`)
  }
}
