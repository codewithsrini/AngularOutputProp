import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output('change') change = new EventEmitter();
  constructor(
    private service: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.service.login();
    // console.log("LOGIN COMPONENT: Login function called");
    // this.change.emit({ 
    //   user: 'codewithsrini', 
    //   usertype: 'internal,',
    //   role: 'admin'
    // });
  }
}

export interface LoggedInUserEventArgs {
  user: string;
  usertype: string;
  role: string
}
