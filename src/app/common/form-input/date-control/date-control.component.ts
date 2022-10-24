import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { format, isMatch, parse } from 'date-fns';
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { FromInputControl } from '../form-input-control';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss']
})
export class DateControlComponent extends FromInputControl implements OnInit {
  // Applicable only to DateControl
  @Input() public returnFormat = "";
  xvalue: any = "";
  minDateNow: any = '';
  maxDateNow: any = '';

  @Input()
  set minDate(minDate: string) {
    if (minDate !== '') {
      this.getDateFormat(minDate).then((parseDateFormat) => {
        this.minDateNow = parse(minDate, parseDateFormat, new Date());
      })
    } else {
      this.minDateNow = '';
    }
  }
  get minDate() {
    return this.minDateNow;
  }

  @Input()
  set maxDate(maxDate: string) {
    if (maxDate !== '') {
      this.getDateFormat(maxDate).then((parseDateFormat) => {
        this.maxDateNow = parse(maxDate, parseDateFormat, new Date());
      })
    } else {
      this.maxDateNow = '';
    }
  }
  get maxDate() {
    return this.maxDateNow;
  }

  constructor(
    @Self() @Optional() public control: NgControl,
    public appSetting: AppSettingsService
  ) {
    super();
    this.control && (this.control.valueAccessor = this);
  }

  getDateFormat(date: string): Promise<string> {
    return new Promise((resolve) => {
      let dateFormat = this.appSetting.environment.serverDateFormat;
      let dateFormatWithTime = this.appSetting.environment.serverDateFormatWithTime;
      let parseDateFormat = this.appSetting.environment.serverDateFormatWithTime;
      if (isMatch(date, dateFormat)) {
        parseDateFormat = dateFormat;
      } else if (isMatch(date, dateFormatWithTime)) {
        parseDateFormat = dateFormatWithTime;
      }
      resolve(parseDateFormat);
    })
  }

  ngOnInit(): void {
    this.setValidate(this.control);
    this.viewValueChange().subscribe(async (xvalue) => {
      if (xvalue) {
        if (this.value !== "") {
          let parseDateFormat = await this.getDateFormat(this.value);
          this.xvalue = parse(this.value, parseDateFormat, new Date());
        } else {
          this.xvalue = "";
        }
      }
    });
  }

  dateSelected() {
    const returnFormat = this.returnFormat === ''
      ? this.appSetting.environment.serverDateFormatWithTime
      : this.returnFormat;
    const xdate = format(this.xvalue, returnFormat);
    if (xdate === 'Invalid date') {
      this.value = '';
    } else {
      this.value = xdate;
    }
  }

  onLocalClear() {
    this.xvalue = '';
    this.onClear();
  }

}
