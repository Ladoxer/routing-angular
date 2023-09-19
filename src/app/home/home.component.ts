import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLogin();
  }

  onLoadServers(id: number){
    // some complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:"1"},fragment:"loading"});
  }

  onLogin(){
    this.authService.login();
    this.isLoggedIn = true;
  }

  onLogout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
