import { Component, Input } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { User } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UserManagement';
  user: User = {
    username: '',
    firstname: '',
    lastname: '',
    age: 0,
    email: '',
    skills: [],
  };

  saveChanges() {
    console.log(this.user);
  }
}
