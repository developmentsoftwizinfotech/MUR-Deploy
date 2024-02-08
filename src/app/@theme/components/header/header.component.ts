import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NbDialogService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '@app-core/data/users';
import { LayoutService } from '@app-core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { NotificationDialogComponent } from '@app-pages/shared/notification-dialog/notification-dialog.component';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  themeTitle: string;
  showThemeIcon: boolean = false;
  isMenuOpen: any = false;
  activeUser: any;
  notificationMenuDetails:any;
  themes = [
    {
      value: 'default',
      name: 'Light',
      // primeng:'saga-blue',
    },
    {
      value: 'dark',
      name: 'Dark',
      // primeng:'md-dark-indigo',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
      primeng: 'saga-blue',
    },
    {
      value: 'corporate',
      name: 'Corporate',
      // primeng:'saga-blue',
    },
    {
      value: 'material-light',
      name: 'material-light',
      // primeng:'saga-blue',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  badge = {
    text: '',
    status: 'danger',
  }
  notificationMenu: any;
  // @ViewChild('toggleButton', { static: false }) toggleButton: ElementRef;
  // @ViewChild('menu') menu: ElementRef;
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private dialogService: NbDialogService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private headerService: HeaderService,
    private el: ElementRef,
    private renderer: Renderer2) {
      this.renderer.listen('window', 'click', (e: Event) => {
        
        if (e.target.toString() !== '[object SVGRectElement]' && e.target.toString() !== '[object SVGPathElement]') {
          this.isMenuOpen = false;
        }
      });
      this.checkMenufunction();
  }



  openWithScroll() {
    this.open(true);
  }

  protected open(hasScroll: boolean) {
    this.dialogService.open(NotificationDialogComponent, { hasScroll });
  }

  private getUsers(data) {

    this.user = data
  }
  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    this.activeUser = JSON.parse(currentUser);

    if (this.activeUser.email == 'Admin') {
      const newUser = { name: 'MUR Admin', picture: '../../../../assets/images/MUR_logo.png' };
      this.getUsers(newUser);
    } else {

      const newUser = { name: 'MUR Vendor', picture: '../../../../assets/images/MUR_logo.png' };
      this.getUsers(newUser);
    }


    this.currentTheme = localStorage.getItem("themeName");
    if (this.currentTheme == "" || this.currentTheme == null) {
      this.currentTheme = "default"
      this.changeTheme(this.currentTheme);
    } else {

      this.changeTheme(this.currentTheme);
    }


    // this.getUsers();

    // this.userService.getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange().pipe(
      map(({ name }) => name),
      takeUntil(this.destroy$),
    ).subscribe(themeName => this.currentTheme = themeName);

    //Notification Check hits
    this.getNotification();
    setInterval(() => this.getNotification(), 20000);


  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  notification() {
    // this.notificationMenu = [
    //   { icon: 'person-outline', title: 'Notification 1', data: { id: 1 } },
    //   { icon: 'person-outline', title: 'Nitesh Comes from Vendor', data: { id: 2 } },
    //   { icon: 'person-outline', title: 'Notification 3', data: { id: 3 } },
    //   { icon: 'person-outline', title: 'Notification 4', data: { id: 4 } },
    //   { title: 'View All Notification', data: { id: 'notification' } },

    // ]
    alert('new men')
  }
  changeTheme(themeName: any) {

    const themeValue = themeName
    if (themeValue === 'dark') {
      this.headerService.switchTheme("md-dark-indigo")
    } else {
      this.headerService.switchTheme("saga-blue")
    }
    localStorage.setItem('themeName', themeName);

    this.themeService.changeTheme(themeName);

  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  // Logout() {
  //   this.menuService.onItemClick().subscribe((res) => {
  //     console.log(res.item.title, "menu works")
  //     // .... do what you want
  //     if (res.item.title === 'Log out') {
  //       localStorage.removeItem('currentUser');

  //       // Redirect to the login page
  //       this.router.navigate(['/login']);
  //     }
  //   });
  // }

  checkMenufunction() {
    this.menuService.onItemClick().subscribe((res) => {

      const selectedItem = res.item
      // .... do what you want
      if (selectedItem.title === 'Log out') {

        this.headerService.Logout(res.item.title)
      } else {
        this.headerService.notificationMenu(selectedItem.data.id)
      }

    });
  }openMenu() {

    this.isMenuOpen = !this.isMenuOpen;
    this.getNotification();
  }
  getNotification() {
    if(this.activeUser.VendorId){
      this.headerService.getNotificationMenu(this.activeUser.VendorId).subscribe((res:any) => {
        if(res.length>0){

          this.notificationMenuDetails=res
          this.badge.text=res[0].CountNotification;
        }
        console.log(res,this.badge, 'notification')
      })
    }else{
      this.headerService.getRequisitionNotification().subscribe((res:any)=>{
        if(res){
          
          this.notificationMenuDetails=res
          this.badge.text=res.length
        }
      })
    }

  }

  allNotificaion(){
    this.headerService.moveToAllNotificationMenu(this.activeUser.VendorId)
  }
}


