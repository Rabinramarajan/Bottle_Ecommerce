import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-alert',
  templateUrl: './logout-alert.component.html',
  styleUrls: ['./logout-alert.component.scss']
})
export class LogoutAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LogoutAlertComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(false);
  }

  yesLogout() {
    this.dialogRef.close(true);
  }

}
