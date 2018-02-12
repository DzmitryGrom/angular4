import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() user;
  change = false;

  constructor() { }
  onClick() {
    this.change = true;
  }
  ngOnInit() {


  }

}
