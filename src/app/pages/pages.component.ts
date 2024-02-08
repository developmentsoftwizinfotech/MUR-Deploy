/* eslint-disable @angular-eslint/contextual-lifecycle */
import { Component, OnInit, HostListener, Injectable } from "@angular/core";

import { MENU_ITEMS, VENDOR_MENU } from "./pages-menu";
import { Observable, Subject, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { HeaderService } from "@app-theme/components/header/header.service";
import { NbDialogService } from "@nebular/theme";
import { DynamicDialogComponent } from "@app-pages/shared/dynamic-dialog/dynamic-dialog.component";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: "ngx-pages",
  styleUrls: ["pages.component.scss"],
  providers:[MessageService],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  menu :any;
  counter = 30;
  message =''
  constructor(
    private dialogService: NbDialogService,
    private router: Router,
    private headerService: HeaderService
  ) {
    // this.countdown(this.counter);

    // this.countdown(this.counter);

  }

  private inactivityTimeout = 9999960000; // 1 minute in milliseconds

  ngOnInit() {


    const currentUser = localStorage.getItem('currentUser');
    const activeUser = JSON.parse(currentUser);
    if (activeUser.email == 'Admin') {
      this.menu = MENU_ITEMS;

    }else{
      this.menu = VENDOR_MENU;

    }


    // this.initInactivityTimer();
    }

  // private initInactivityTimer() {
  //   let timer: number | any;

  //   const resetTimer = () => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       this.logout();
  //     }, this.inactivityTimeout);
  //   };

  //   resetTimer();

  //   const events = ["mousemove", "keydown", "scroll", "touchstart"];
  //   events.forEach((event) => {
  //     document.addEventListener(event, resetTimer);
  //   });

  //   setInterval(() => {
  //     this.showSessionTimeoutPopup(this.inactivityTimeout / 2);
  //   }, this.inactivityTimeout / 2);
  // }

  // private logout() {
  //   this.headerService.Logout("Log out");
  // }

  // private showSessionTimeoutPopup(countDown) {
  //   const dialogRef = this.dialogService.open(DynamicDialogComponent, {
  //     context: {
  //       title: "Are You Still There",
  //       message: "If not, we will close this session.",
  //       buttons: [
  //         { label: 'Cancel', value: false, status: 'basic' },
  //         { label: 'Sign Out', value: true, status: 'danger' },
  //       ],
  //     },
  //   });

  //   dialogRef.onClose.subscribe((result: any) => {
  //     debugger
  //     if (result === true) {
  //       this.logout();

  //     } else {

  //     }
  //   });


  // }














  // countdown(counter) {
  //   if (counter > 0) {
  //     counter--;
  //     setTimeout(function () { this.countdown(counter) }, 1000);
  //    return counter;
  //   }
  // }

  // countdown(counter: number) {
  //   if (counter > 0) {
  //     counter--;
  //     setTimeout(() => {
  //       this.counter = counter; // Update the counter value
  //       this.countdown(counter);
  //     }, 1000);
  //   }
  // }


  // private countDown() {
  //   // this.clearTimer();
  //   this.inactivityTimeout = window.setInterval(() => {
  //     // this.inactivityTimeout -= 1;
  //     if (this.inactivityTimeout === 0) {
  //       this.message = 'Blast off!';
  //     } else {
  //       if (this.inactivityTimeout < 0) { this.inactivityTimeout = 10; } // reset
  //       this.message = `T-${this.inactivityTimeout} seconds and counting`;
  //     }
  //   }, 1000);
  // }


  // countdown(counter: number) {
  //   if (counter > 0) {
  //     counter--;
  //     setTimeout(() => {
  //       this.counter = counter; // Update the counter value
  //       this.countdown(counter);
  //     }, 1000);
  //   } else {
  //     this.showSessionTimeoutAlert();
  //   }
  // }

  // showSessionTimeoutAlert() {
  //   const message = `Your session will be closed in ${this.counter} seconds.`;
  //   alert(message);
  //   this.logout();
  // }
}





