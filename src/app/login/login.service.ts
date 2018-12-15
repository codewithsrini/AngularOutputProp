import { Injectable, EventEmitter } from '@angular/core';
import { LoggedInUserEventArgs } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $isLoggedIn = new EventEmitter();
  user: LoggedInUserEventArgs = {
    user: "",
    usertype: "",
    role:""
  };

  constructor() { }

  login() {
    console.log("Login Service");
    this.user.user = 'codewithsrini';
    this.user.usertype = 'internal';
    this.user.role = 'admin';

    this.$isLoggedIn.emit(this.user);
  }
}
