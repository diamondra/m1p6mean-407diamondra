import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../models/UserModel';
import { appConfig } from '../app.config';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl: string = appConfig.apiUrl + "user/";

  saveUser(data) {
    let header = new HttpHeaders({
			'Content-Type': 'application/json'
		});
    return this.http.post(this.baseurl + 'save', JSON.stringify(data),{headers:header})
    .toPromise()
    .then(response => { return response });
  }
}