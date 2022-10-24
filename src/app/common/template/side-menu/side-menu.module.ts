import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuDirective } from './side-menu.directive';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    SideMenuDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  exports: [
    SideMenuDirective
  ]
})
export class SideMenuModule { }
