import { Component } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userEmail = '';
  userPassword: any;

  constructor(private authService: AuthenticationService, private router: Router, private toastController: ToastController) {

  }

  tryLogin() {
    this.authService.loginUser(this.userEmail, this.userPassword)
        .then(res => {
          console.log('alvaro' + res);
          this.router.navigate(['/main']).then(r => {console.log('entraste'); }, error => {console.log('no entraste'); });
          this.presentToast('Inicio correcto');
        }, error => {
          console.log('alvaro' + error);
          this.presentToast(error);
        });
  }

    async presentToast(info) {
        const toast = await this.toastController.create({
            message: info,
            duration: 2000
        });
        await toast.present();
    }
}
