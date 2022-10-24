import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [EmptyStateComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    EmptyStateComponent
  ]
})
export class EmptyStateModule { }
