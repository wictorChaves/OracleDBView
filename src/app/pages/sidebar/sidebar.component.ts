import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT }                  from '@angular/common';

@Component({
  selector   : 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls  : ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  CloseMenu() {
    this.document.body.classList.remove('is-collapsed');
  }

}
