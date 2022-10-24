import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { LogoutAlertComponent } from './logout-alert/logout-alert.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CancelAlertComponent } from './cancel-alert/cancel-alert.component';

@NgModule({
  declarations: [
    DeleteAlertComponent,
    LogoutAlertComponent,
    CancelAlertComponent,
  ],
  imports: [CommonModule, MatDialogModule, MatRippleModule, MatButtonModule],
  exports: [DeleteAlertComponent, LogoutAlertComponent, CancelAlertComponent],
})
export class AlertModule {}
