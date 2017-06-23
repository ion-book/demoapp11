import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const firebaseConfig = {
   apiKey: "AIzaSyAbD19sI5Xz_jKjEMCQhjuYXVPrdn3YEsY",
    authDomain: "codelab-22299.firebaseapp.com",
    databaseURL: "https://codelab-22299.firebaseio.com",
    projectId: "codelab-22299",
    storageBucket: "codelab-22299.appspot.com",
    messagingSenderId: "141181591031"
  };

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AngularFireModule, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
