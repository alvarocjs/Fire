import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userEmail = '';
  userPassword: any;

  constructor(private authService: AuthenticationService, private router: Router) {

  }

  tryLogin() {
    this.authService.loginUser(this.userEmail, this.userPassword)
        .then(res => {
          console.log('alvaro' + res);
          this.router.navigate(['/main']).then(r => {console.log('entraste'); }, error => {console.log('no entraste'); });
        }, error => {
          console.log('alvaro' + error);
        });
  }
}
