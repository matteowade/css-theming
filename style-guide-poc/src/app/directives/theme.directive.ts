import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

/**
 * Usage:
 * <mycomponent [dtTheme]="{'color-main': '#bada55'}"></mycomponent>
 */
@Directive({
  selector: '[dtTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input('dtTheme') theme: {[prop: string]: string};

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnChanges() {
    Object.keys(this.theme).forEach(prop => {
      this.el.nativeElement.style.setProperty(`--${prop}`, this.theme[prop]);
    });
  }
}