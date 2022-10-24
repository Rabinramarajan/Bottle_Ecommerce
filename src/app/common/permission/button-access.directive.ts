import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appButtonAccess]",
})
export class ButtonAccessDirective implements OnChanges {
  @Input("appButtonAccess") buttonAccess = "";
  @Input("status") status = false;
  constructor(private el: ElementRef) {
    // console.log(this.buttonAccess);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

  }

  // async init() {
  //   if (status) {
  //     this.el.nativeElement.remove();
  //   } else {
  //     if (this.buttonAccess === "False") {
  //       this.el.nativeElement.remove();
  //     }
  //   }
  // }
}
