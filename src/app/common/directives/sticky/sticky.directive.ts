import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSticky]',
})
export class StickyDirective implements AfterViewInit {
  @Input() appSticky = '';
  @Input() bgColor = 'white';
  @Input() direction = 'right';
  @Input() shadow = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'position',
        'sticky'
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.bgColor
      );
      this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '3');
      if (this.shadow) {
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'box-shadow',
          '0px 0px 15px 0 rgb(0 0 0 / 24%)'
        );
      }
      if (this.appSticky === '0') {
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          this.direction,
          this.appSticky
        );
      } else {
        let boundary = this.elementRef.nativeElement.getBoundingClientRect();
        let position =
          this.elementRef.nativeElement.parentElement.clientWidth -
          boundary.right;
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          this.direction,
          position + 'px'
        );
      }
    }, 100);
  }
}
