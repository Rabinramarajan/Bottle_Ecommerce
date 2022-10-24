import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinNumberOnlyDirective } from './pin-number-only/pin-number-only.directive';
import { SearchPanelHeightDirective } from './search-panel-height/search-panel-height.directive';
import { StickyDirective } from './sticky/sticky.directive';

@NgModule({
  declarations: [
    PinNumberOnlyDirective,
    SearchPanelHeightDirective,
    StickyDirective,
  ],
  imports: [CommonModule],
  exports: [
    PinNumberOnlyDirective,
    SearchPanelHeightDirective,
    StickyDirective,
  ],
})
export class DirectivesModule { }
