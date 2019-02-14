import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkRollOnScroll]'
})
export class RollOnScrollDirective {
  @HostListener('window:scroll')
  onWindowScroll() {
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      rotation
    );
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
}
