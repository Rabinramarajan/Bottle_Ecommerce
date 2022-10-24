import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchButtonComponent } from './search-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    SearchButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    OverlayModule
  ],
  exports: [
    SearchButtonComponent
  ]
})
export class SearchButtonModule { }
