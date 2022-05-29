import { Component, Input, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { User } from './interfaces';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
    });
  }

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
    this.userService.createUser(this.user).subscribe(() => {
      console.log('Success!!');
    });
  }
}
