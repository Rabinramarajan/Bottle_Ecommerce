import { Component, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FromInputControl } from '../form-input-control';

@Component({
  selector: 'app-email-control',
  templateUrl: './email-control.component.html',
  styleUrls: ['./email-control.component.scss']
})
export class EmailControlComponent extends FromInputControl implements OnInit {

  constructor(
    @Self() @Optional() public control: NgControl
  ) {
    super();
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.email = true;
    this.setValidate(this.control);
  }

}
