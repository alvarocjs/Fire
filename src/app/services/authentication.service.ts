import { Injectable } from '@angular/core';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebaseX: FirebaseX) { }

  loginUser(userEmail, userPassword){
    return this.firebaseX.signInUserWithEmailAndPassword(userEmail, userPassword);
  }
}
