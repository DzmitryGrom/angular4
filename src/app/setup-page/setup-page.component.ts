import { Component, OnInit } from '@angular/core';
import {UsersService} from "../user.service";

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css'],
})
export class SetupPageComponent implements OnInit {


  size;
  active = false;

  constructor(private usersService: UsersService){}


  ngOnInit() {
    this.size = this.usersService.size

  }

  onSize() {
    this.usersService.setSize(this.size)
    this.active = true
    let vm = this
    setTimeout(function () {
      vm.active = false
    },3000);
  }
}
