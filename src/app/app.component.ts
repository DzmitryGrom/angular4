import { Component } from '@angular/core';
import {UsersService} from "./user.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]

})
export class AppComponent {
  constructor(private usersService: UsersService){}
}
