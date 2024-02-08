/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-app',
  template: `<router-outlet>
     <!-- <h2>{{ timer }}</h2>
  <p *ngIf="showDialog">{{ dialog }}</p>
  <p *ngIf="showNotice">{{ notice }}</p> -->
  </router-outlet> `,
})
export class AppComponent implements OnInit {
  title = 'MUR_FrontEnd';

  constructor(private titleService: Title, private router: Router) {


  }


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    console.log(this.router.url)
    const currentTitle = localStorage.getItem('title');
    if (currentTitle) {
      this.titleService.setTitle(currentTitle);
    }
  }

}
