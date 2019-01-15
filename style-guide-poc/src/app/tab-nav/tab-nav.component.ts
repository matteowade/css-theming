import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  selectedTab = 'typography';
  h1Styles = {};

  constructor() { }

  ngOnInit() {
  }

  styleChange(event) {
    this.h1Styles = event;
  }
}
