import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { environment } from '@env/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'ngx-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent  implements OnInit {



    email: string;
    password: string;
    baseUrl: string = environment.baseApiUrl;
    constructor(private titleService:Title, private authService: NbAuthService, private router: Router,private http:HttpClient) {}
    ngOnInit() {
      this.titleService.setTitle('MUR Vendor-Site');
      localStorage.setItem('title', 'MUR Vendor-Site');
      const currentUser = localStorage.getItem('currentUser');
      // if (currentUser) {
      //   this.router.navigate(['/pages']);
      // }
    }
    Vendorlogin() {

      const user = { email: this.email, password: this.password };
      // this.http.get(`${this.baseUrl}VendorLoginJWT?username=${user.email}&password=${user.password}`).subscribe(res=>{
      this.http.get(`${this.baseUrl}/VendorLogin?username=${user.email}&password=${user.password}`).subscribe(res=>{
        if(res!==null){
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(['/pages/inventory/vendor-requisition']);
        }
        console.log(res,"value if veb")
      })
      // this.http.get(this.baseUrl +` VendorLogin?username=${user.email}&password=${user.password}`).subscribe(res=>{
      //   console.log(res,"value if veb")
      // })
      // console.log(user.email,user.password,'vendorLoginDetails')
      // if (user.email === 'Admin' && user.password === 'Passw0rd') {
      //   localStorage.setItem('currentUser', JSON.stringify(user));
      //   this.router.navigate(['/pages']);
      // } else {
      //   alert("Invalid Record")
      //   console.log('Invalid credentials');
      // }
    }
  }







