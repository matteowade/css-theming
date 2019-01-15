import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-select-menu',
  templateUrl: './custom-select-menu.component.html',
  styleUrls: ['./custom-select-menu.component.scss']
})
export class CustomSelectMenuComponent implements OnInit {

  menuOpen: boolean = false;

  @Input() cssId: string;
  @Input() zIndex: string;

  public uniqueId: string;

  constructor() {}

  ngOnInit() {
    this.uniqueId = this.cssId + Math.floor((Math.random() * 100000) + 1);
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

