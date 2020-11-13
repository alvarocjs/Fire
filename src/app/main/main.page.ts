import { Component, OnInit } from '@angular/core';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private auth: FirebaseX) { }

  ngOnInit() {
  }

    estamosAqui() {
        this.auth.getCurrentUser().then(res => {console.log(JSON.stringify(res)); }, error => {console.log('alvaro3' + error); });
    }
}
