import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  users: any;

  constructor(private userService: UserService){
    //this.users = this.userService.users
    this.userService.getUser().subscribe(users => {
      this.users = users;
      console.log(users.len)
    });
  }

}
