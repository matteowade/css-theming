import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {
  @Input() cssRule;
  @Output() changeSize = new EventEmitter();

  public fontObj = {};
  public placeholder;

  constructor() { }

  ngOnInit() {

    switch (this.cssRule) {
      case 'h1':
        this.placeholder = '96';
      break;
    }
  }

  fontSizeInput(val: string) {
    this.fontObj[this.cssRule + '-font-size'] = val + 'px';
    this.broadcastChanges();
  }

  broadcastChanges() {
    this.changeSize.emit(this.fontObj);
  }
}
