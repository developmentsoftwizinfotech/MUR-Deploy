import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-not-internet',
  templateUrl: './not-internet.component.html',
  styleUrls: ['./not-internet.component.scss']
})
export class NotInternetComponent {
  receivedData: string
  data: any
  constructor(private menuService: NbMenuService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.receivedData = params['param'];
      if (this.receivedData == null) {
        this.data = 404
      } else {
          this.data = this.receivedData
      }
      // 'param' matches the parameter name defined in the route configuration
      console.log('Received Data:', this.receivedData);
    });
  }

  goToHome() {
    this.menuService.navigateHome();
  }


  // ...


}
