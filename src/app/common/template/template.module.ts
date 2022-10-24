import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { OvalLinkComponent } from './oval-link/oval-link.component';
import { SearchButtonModule } from './search-button/search-button.module';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [
    ButtonComponent,
    OvalLinkComponent,
    LabelComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    SearchButtonModule
  ],
  exports: [
    SearchButtonModule,
    ButtonComponent,
    OvalLinkComponent,
    LabelComponent
  ]
})
export class TemplateModule { }
