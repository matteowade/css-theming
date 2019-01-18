import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FontsService } from '../fonts.service';
import * as WebFont from 'webfontloader';
import { Observable } from 'rxjs';
import { CustomSelectMenuComponent } from '../custom-select-menu/custom-select-menu.component'

@Component({
  selector: 'app-font-list',
  templateUrl: './font-list.component.html',
  styleUrls: ['./font-list.component.scss']
})
export class FontListComponent implements OnInit {
  @Input() cssRule;
  @Output() changeFace = new EventEmitter();
  public fontObj = {};
  public fontListLoaded = false;
  public fontsLoaded = false;
  public fonts;
  public chosenFontFace;

  constructor(private _fontsService: FontsService) { }

  ngOnInit() {
    this.getFonts();
  }

  getFonts() {
    this._fontsService.getFonts().subscribe(
      data => {this.fonts = data},
      err => console.error(err),
      () => {
        this.fontListLoaded = true;

        if (!this.fontsLoaded) {
          this.loadFonts();
        }
      }
    );
  }

  loadFonts() {
    const fontsToLoad = [];
    const _this = this;

    for (let i = 0; i < this.fonts.items.length; i++) {
      fontsToLoad.push(this.fonts.items[i].family);
    }

    WebFont.load({
      google: {
        families: fontsToLoad
      },
      classes: false,
      timeout: 20000,
      active: function() {
        _this.fontsLoaded = true;
      }
    });
  }

  selectFontFace(fontName) {
    this.chosenFontFace = fontName;
    this.fontObj[this.cssRule + '-font-family'] = fontName;
    this.broadcastChanges();
  }

  broadcastChanges() {
    this.changeFace.emit(this.fontObj);
  }
}
