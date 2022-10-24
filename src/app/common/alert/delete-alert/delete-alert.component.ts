import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrls: ['./delete-alert.component.scss']
})
export class DeleteAlertComponent implements OnInit {
  msg = "This is going to be permanently delete, are you sure?";
  constructor(
    public dialogRef: MatDialogRef<DeleteAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    if (dialogData.msg && dialogData.msg !== "") {
      this.msg = dialogData.msg;
    }
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close(false);
  }

  yesDelete() {
    this.dialogRef.close(true);
  }

}
