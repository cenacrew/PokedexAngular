import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[shadow]',
})
export class ShadowDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.shadow(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.shadow(false);
  }

  private shadow(show: boolean) {
    this.el.nativeElement.style.boxShadow = show ? '10px 10px 20px #b7b7b7, -10px -10px 20px #ffffff' : '0 2px 5px rgba(0, 0, 0, 0.2)';
  }
}
