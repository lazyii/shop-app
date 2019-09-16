import { Component, OnInit } from '@angular/core';

interface User {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  //标准写法，但是比较啰嗦

  user: User = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.user)
  }

}
