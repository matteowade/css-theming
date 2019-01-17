import { Component, OnInit} from '@angular/core';

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
    const _this = this;
    _this.h1Styles = {};
    setTimeout(() => {
      _this.h1Styles = event;
      console.log(_this.h1Styles);
    }, 10);
  }
}
