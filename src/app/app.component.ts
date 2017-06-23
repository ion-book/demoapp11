import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AngularFireAuth, private router: Router) {
    
    this.authService.authState.subscribe(
      (user: firebase.User) => {
      if (!user) {
        this.user_displayName = '';
        console.log("Logged out");
        this.isLoggedIn = false;
        this.user_email = '';
        this.router.navigate(['login']);
        return;
      }
      this.isLoggedIn = true;
      this.user_displayName = user.displayName; 
      this.user_email = user.email;
          console.log("Logged in");
          console.log(user);
          this.router.navigate(['']);     
    });
  }
}
