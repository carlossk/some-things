import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStandOut]'
})
export class StandOutDirective {
  @Input('appStandOut') appStandOut: string;

  constructor(private element: ElementRef) {
    console.log('directive');
  }
  @HostListener('mouseenter') mouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.appStandOut;

  }
  @HostListener('mouseleave') mouseLeave() {
    this.element.nativeElement.style.backgroundColor = null;

  }


}
