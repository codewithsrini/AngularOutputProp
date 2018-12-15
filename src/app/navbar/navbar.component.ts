import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { LoggedInUserEventArgs } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLogged = false;
  user: LoggedInUserEventArgs;
  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.$isLoggedIn
      .subscribe( (data) => {
        console.log("I got data in navbar", data);
        
          this.isUserLogged = true;
          this.user = data;
      })
  }

}
