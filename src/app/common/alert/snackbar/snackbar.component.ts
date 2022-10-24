import { Component, OnInit, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  button = false;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackbar: MatSnackBar
  ) {
    setTimeout(() => {
      this.button = this.data.button;
    }, 400);

    // console.log(this.data);
  }

  ngOnInit() {}

  dismiss() {
    this.snackbar.dismiss();
  }
}
