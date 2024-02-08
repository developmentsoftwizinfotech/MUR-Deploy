import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
  email: string;
  password: string;
  constructor(private authService: NbAuthService, private router: Router,private titleService:Title) {

    this.titleService.setTitle('MUR Office-Site');
    localStorage.setItem('title', 'MUR Office-Site');

  }
  ngOnInit() {
    // Check if the user is already logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.router.navigate(['/pages']); // Redirect to the dashboard if logged in
    }
  }
  login() {
    // Perform authentication logic, e.g., calling an API or validating credentials
    // Simulate a successful login for demonstration purposes
    const user = { email: this.email, password: this.password };
    if (user.email === 'Admin' && user.password === 'admin@') {
      // Store the authenticated user in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Redirect to a protected route or any desired location
      this.router.navigate(['/pages']);
    } else {
      alert("Invalid Record")
      console.log('Invalid credentials');
    }
  }
}




 

  
