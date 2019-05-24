import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit{
  public error: string;
  model : UserModel;

  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit() {
    this.model = new UserModel();
  }
  public submit() {
    console.log(this.model);
    this.auth.login(this.model.pseudo, this.model.mdp)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['accueil']),
        err => this.error = 'Invalide pseudo/mot de passe'
      );
  }
}
