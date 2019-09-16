import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../data/model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private httpClient: HttpClient;
  constructor(hc: HttpClient) {
    this.httpClient = hc
  }

  login(user: User): boolean {
    console.log("service:" + user.username + user.password);
    return true;
  }
}
