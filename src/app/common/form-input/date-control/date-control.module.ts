import { inject, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateControlComponent } from './date-control.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AppSettingsService } from '../../services/app-settings/app-settings.service';
import { DateAdapter, MatRippleModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { Platform } from '@angular/cdk/platform';
import { CustomDateAdapter } from './custom-date-adapter';
import { FormPipeModule } from '../form-pipe/form-pipe.module';
import { FormDirectiveModule } from '../form-directive/form-directive.module';

export const DATE_CONFIG = new InjectionToken("Date Format", {
  factory: () => {
    return {
      viewFormat: inject(AppSettingsService).environment.dateViewFormat,
    };
  },
});

export const MY_FORMATS = {
  parse: {
    dateInput: "dd-MM-yyyy HH:mm",
  },
  display: {
    dateInput: "dd MMM yyyy",
    monthYearLabel: "MMM yyyy",
    dateA11yLabel: "dd MMM yyyy",
    monthYearA11yLabel: "MMMM yyyy",
  },
};

@NgModule({
  declarations: [
    DateControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTooltipModule,
    MatRippleModule,
    FormPipeModule,
    FormDirectiveModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  exports: [DateControlComponent, MatDatepickerModule],
})
export class DateControlModule { }
