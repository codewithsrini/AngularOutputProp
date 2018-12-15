import { Component } from '@angular/core';
import { LoggedInUserEventArgs } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isUserLogged = false;
  user: LoggedInUserEventArgs;

  onLoginEventFired(eventArgs: LoggedInUserEventArgs) {
    console.log("APP COMPONENT: On Login Event Fired", eventArgs);
    if(eventArgs.user) {
      this.isUserLogged = true;
      this.user = eventArgs;
    }
  }

}
