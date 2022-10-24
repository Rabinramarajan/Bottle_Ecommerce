import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[panelheight]",
})
export class SearchPanelHeightDirective implements AfterViewInit {
  @Input() panelheight = "";
  @Input() buffer = 60;
  @Input() maxHeight = 480;
  elementId: any = "";
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.panelheight !== "") {
        this.elementId = document.getElementById(this.panelheight);
        // console.log(this.elementId);
        const calcHeight = this.elementId.clientHeight + this.buffer;
        let height = 0;

        calcHeight > this.maxHeight
          ? (height = this.maxHeight)
          : (height = calcHeight);

        this.renderer.setStyle(
          this.elementRef.nativeElement,
          "height",
          height + "px"
        );
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          "max-height",
          this.maxHeight + "px"
        );
      }
    }, 10);
  }
}
