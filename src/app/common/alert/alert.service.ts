import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { LogoutAlertComponent } from './logout-alert/logout-alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public dialog: MatDialog
  ) { }

  async delete(msg?: string): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(DeleteAlertComponent, {
        width: '450px',
        disableClose: true,
        data: {
          msg: msg
        }
      });
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    })
  }
  async logout(): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(LogoutAlertComponent, {
        width: '450px',
        disableClose: true,
      });
      dialogRef.afterClosed().subscribe((result) => {
        resolve(result);
      });
    })
  }
}
