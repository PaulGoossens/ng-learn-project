import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[type="number"]'
})
export class SelectOnFocusDirective {

  constructor(
    private elementRef: ElementRef
  ) { }

    @HostListener('focus') handleFocus() {
      this.elementRef.nativeElement.select();
    }

}
