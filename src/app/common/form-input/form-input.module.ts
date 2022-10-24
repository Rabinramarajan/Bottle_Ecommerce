import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputControlComponent } from './input-control/input-control.component';
import { DirectivesModule } from '../directives/directives.module';
import { MatRippleModule } from '@angular/material/core';
import { NumberControlComponent } from './number-control/number-control.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SelectControlComponent } from './select-control/select-control.component';
import { SelectSearchPipe } from './select-control/select-search.pipe';
import { MatSelectModule } from '@angular/material/select';
import { DateControlModule } from './date-control/date-control.module';
import { TextareaControlComponent } from './textarea-control/textarea-control.component';
import { FormPipeModule } from './form-pipe/form-pipe.module';
import { FormDirectiveModule } from './form-directive/form-directive.module';
import { PasswordControlComponent } from './password-control/password-control.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelControlComponent } from './label-control/label-control.component';
import { EmailControlComponent } from './email-control/email-control.component';
import { PinControlComponent } from './pin-control/pin-control.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

@NgModule({
  declarations: [
    InputControlComponent,
    NumberControlComponent,
    SelectControlComponent,
    SelectSearchPipe,
    TextareaControlComponent,
    PasswordControlComponent,
    LabelControlComponent,
    EmailControlComponent,
    PinControlComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRippleModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    DateControlModule,
    FormPipeModule,
    FormDirectiveModule,
    MatTooltipModule,
    DirectivesModule,
    OverlayModule,
    MatPasswordStrengthModule
  ],
  exports: [
    FormsModule,
    InputControlComponent,
    NumberControlComponent,
    SelectControlComponent,
    NgxMatSelectSearchModule,
    DateControlModule,
    TextareaControlComponent,
    PasswordControlComponent,
    LabelControlComponent,
    EmailControlComponent,
    PinControlComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormInputModule { }
