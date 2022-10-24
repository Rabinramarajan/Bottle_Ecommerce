import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngModel][appEmptySpaceHandler]',
})
export class EmptySpaceHandlerDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;

  @HostListener('input', ['$event']) onInputChange($event: any) {
    // console.log($event.target.value);
    let value = $event.target.value.trim();
    if (value === '') {
      this.value = '';
      $event.target.value = this.value;
      this.ngModelChange.emit(this.value);
    }
  }
}
