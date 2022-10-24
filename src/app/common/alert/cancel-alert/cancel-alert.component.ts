import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-cancel-alert',
  templateUrl: './cancel-alert.component.html',
  styleUrls: ['./cancel-alert.component.scss'],
})
export class CancelAlertComponent implements OnInit {
  msg = '';
  constructor(
    public dialogRef: MatDialogRef<CancelAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    if (dialogData.msg && dialogData.msg !== '') {
      this.msg = dialogData.msg;
    }
  }

  ngOnInit(): void {}

  close(): void {
    this.dialogRef.close(false);
  }

  yesDelete() {
    this.dialogRef.close(true);
  }
}
