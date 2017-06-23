import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items: FirebaseListObservable<any>;
  name: string;
  id: number;

  constructor(private authService: AuthService, private router: Router, private db: AngularFireDatabase) {
  this.items = db.list('/items');
  }
  ngOnInit() {
  }
  logout() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

  addItem() {
    this.items.push({ id: this.id, name: this.name });
    this.id++;
    this.name="";
  }

  //TODO
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }

  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }

}
