import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';
 
@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
  
  @Output()
    public clickOutside = new EventEmitter();
  
  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
      const clickedInside = this._elementRef.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.clickOutside.emit(null);
      }
    }
      
  constructor(private _elementRef : ElementRef) {
  }
  
}
