import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { UserService } from '../service/user.service'
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public error: string;
  model : UserModel;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.model = new UserModel();
  }
  public submit() {
    console.log(this.model);
    this.user.saveUser(this.model);
  }
}
