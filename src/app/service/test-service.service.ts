import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private httpClient: HttpClient;
  constructor(hc: HttpClient) {
    this.httpClient = hc
   }
}
