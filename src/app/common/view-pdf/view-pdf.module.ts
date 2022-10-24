import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPdfComponent } from './view-pdf.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ViewPdfComponent],
  entryComponents: [ViewPdfComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, PipesModule, MatDialogModule, MatButtonModule],
  exports: [ViewPdfComponent],
})
export class ViewPdfModule {}
