import { Component, OnInit } from '@angular/core';

import {User} from "../User";

import {UserServiceService} from "../user-service.service";

@Component({

  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit{

  model = new User(0, '', null, '', '');
  isnewUser = true;
  submitted = false;

  constructor(private userService: UserServiceService) {
  }

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(0,'',0,'','');
  }

  checkPassword(pass: String): boolean {
    return pass===this.model.password;
  }

  toLogin() {
    this.submitted = false;
  }

  saveUser() {
    this.userService.saveUser(this.model).subscribe();
  }

  verifyNewUser(username: String) {
    this.userService.findUserByUserName(username).subscribe(
      result => {
        if(result.id <= 0) {
          this.isnewUser = true;
          this.onSubmit();
        } else {
          this.isnewUser = false;
        }
      }
    );
  }

  ngOnInit(): void {
    this.isnewUser = true;
  }
}
