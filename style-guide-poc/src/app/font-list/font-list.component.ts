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
  @Output() change = new EventEmitter();
  public fontObj = {};
  public fontListLoaded = false;
  public fonts;
  public chosenFontFace;
  public chosenFontSize;

  constructor(private _fontsService: FontsService) { }

  ngOnInit() {
    this.getFonts();
  }

  getFonts() {
    this._fontsService.getFonts().subscribe(
      data => {this.fonts = data},
      err => console.error(err),
      () => {
        console.log(this.fonts);
        this.fontListLoaded = true;
        this.loadFonts();
      }
    );
  }

  loadFonts() {
    const fontsToLoad = [];
    for (let i = 0; i < this.fonts.items.length; i++) {
      fontsToLoad.push(this.fonts.items[i].family);
    }
    console.log(fontsToLoad);

    WebFont.load({
      google: {
        families: fontsToLoad
      },
      timeout: 20000
    });
  }

  selectFontFace(fontName) {
    this.chosenFontFace = fontName;
    this.fontObj[this.cssRule + '-font-family'] = fontName;
    this.broadcastChanges();
  }

  selectFontSize(fontSize) {
    this.chosenFontSize = fontSize;
    this.fontObj[this.cssRule + '-font-size'] = fontSize;
    this.broadcastChanges();
  }

  broadcastChanges() {
    this.change.emit(this.fontObj);
  }
}
