import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-line-height',
  templateUrl: './line-height.component.html',
  styleUrls: ['./line-height.component.scss']
})
export class LineHeightComponent implements OnInit {
  @Input() cssRule;
  @Output() changeHeight = new EventEmitter();

  public fontObj = {};
  public placeholder;

  constructor() { }

  ngOnInit() {
    switch (this.cssRule) {
      case 'h1':
        this.placeholder = '130';
      break;
    }
  }

  lineHeightInput(val: string) {
    this.fontObj[this.cssRule + '-font-line-height'] = val + 'px';
    this.broadcastChanges();
  }

  broadcastChanges() {
    this.changeHeight.emit(this.fontObj);
  }
}
