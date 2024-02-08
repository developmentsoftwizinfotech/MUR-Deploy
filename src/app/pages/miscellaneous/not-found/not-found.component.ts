import { NbMenuService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

    receivedData: any
    data:any
  constructor(private menuService: NbMenuService, private route: ActivatedRoute) {
    debugger


}
ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.receivedData = params['ID'];
  
    console.log(this.receivedData)
    //        this.selectedItem = params['editDetails'];
    // Now you have both the ID and data in your component
  });
}
  goToHome() {
    this.menuService.navigateHome();
  }
}


// import { NbMenuService } from '@nebular/theme';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'ngx-not-found',
//   styleUrls: ['./not-found.component.scss'],
//   templateUrl: './not-found.component.html',
// })
// export class NotFoundComponent implements OnInit {

 
  
//     receivedData: string
//     data:any
//     errorPageMassage: {
//       header:"404 Page Not Found";
//       title: "The page you were looking for doesn't exist"
//     }
//     constructor(private menuService: NbMenuService, private route: ActivatedRoute) {
//       this.data =  this.errorPageMassage
   
//     }

//     ngOnInit(): void {
//       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//       //Add 'implements OnInit' to the class.
//       this.route.params.subscribe(params => {
//         this.receivedData = JSON.parse(params['param']);
//         if (this.receivedData == null) {
//           this.data = this.errorPageMassage
//         } else {
//             this.data = this.receivedData
//         }
//         console.log('Received Data:', this.receivedData);
//       });
//     }
  
//     goToHome() {
//       this.menuService.navigateHome();
//     }
  
  
  
  
//   }
  

