import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { User } from '../../data/model'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  //标准写法，但是比较啰嗦

  user: User = {
    username: '',
    password: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.user);
    const result = this.testService.login(this.user);
    if(result){
      this.router.navigate(['/products']);
    }else{
      //
    }
  }

}
