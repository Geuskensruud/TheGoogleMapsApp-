import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../user-service.service";
import {User} from "../User";
import {LocalStorageService} from "../LocalStorageService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  user: User;
  loggedInCorrect = false;
  loggedInIncorrect = false;

  constructor(private userService: UserServiceService, private storage: LocalStorageService) { }

  ngOnInit() {
  }

  validateUser(username: String, password: String) {
    this.userService.findUser(username, password).subscribe(
      result => {
        if (result.id > 0) {
          this.loggedInCorrect = true;
          this.storage.storeUser(result);
        } else {
          this.loggedInIncorrect = true;
        }
      }
    )
  }

  resetFlags() {
    this.loggedInIncorrect = false;
    this.loggedInCorrect = false;
  }

}
