import { Component }       from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth }            from 'firebase/app';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent {

  public title = 'OracleDBView';

  constructor(public auth: AngularFireAuth) {
    
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

}
