import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FromInputControl } from '../form-input-control';

@Component({
  selector: 'app-textarea-control',
  templateUrl: './textarea-control.component.html',
  styleUrls: ['./textarea-control.component.scss']
})
export class TextareaControlComponent extends FromInputControl implements OnInit {

  // for input & output check form input control
  @Input() public className = "";

  constructor(
    @Self() @Optional() public control: NgControl
  ) {
    super();
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.setValidate(this.control);
  }

}
