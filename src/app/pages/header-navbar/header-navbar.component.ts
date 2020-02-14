import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT }                  from '@angular/common';
import { AngularFireAuth }           from '@angular/fire/auth';

@Component({
  selector   : 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls  : ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public  auth                      : AngularFireAuth
  ) { }

  ngOnInit() {
  }

  CollapseMenu() {
    if (this.document.body.classList.value.includes("is-collapsed")) {
      this.document.body.classList.remove('is-collapsed');
    } else {
      this.document.body.classList.add('is-collapsed');
    }
  }

  logout() {
    this.auth.signOut();
  }

}
