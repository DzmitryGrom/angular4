import { Component } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]

})
export class AppComponent {
  constructor(private userService: UserService){}
}
