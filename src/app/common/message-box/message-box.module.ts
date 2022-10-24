import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MessageFilterPipe } from './message-filter.pipe';
import { MessageExpandComponent } from './message-expand/message-expand.component';
import { MessageHeaderComponent } from './message-header/message-header.component';

@NgModule({
  declarations: [MessageBoxComponent, MessageFilterPipe, MessageExpandComponent, MessageHeaderComponent],
  imports: [CommonModule, MatRippleModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MessageBoxComponent, MessageFilterPipe, MessageExpandComponent, MessageHeaderComponent],
})
export class MessageBoxModule { }
