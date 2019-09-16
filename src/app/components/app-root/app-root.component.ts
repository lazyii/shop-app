import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html'
})
export class AppRootComponent {
  //step1: 判断用户是否需要重新登录。需要则跳转至登录页面，否则跳转app-root
  login = true;//true已经登录，false未登录

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/