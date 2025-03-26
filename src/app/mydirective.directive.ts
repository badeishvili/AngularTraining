import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class AppDirective {
  @Input() appDirective: string = "black";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appDirective);
    this.renderer.setAttribute(this.el.nativeElement, 'id', 'main');
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.renderer.addClass(this.el.nativeElement, 'active');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.removeClass(this.el.nativeElement, 'active');
    this.renderer.removeAttribute(this.el.nativeElement, 'id');
  }

  @HostListener('dblclick') onDoubleClick() {
    this.el.nativeElement.remove();
  }
}
