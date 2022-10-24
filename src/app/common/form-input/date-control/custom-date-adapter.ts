import { Injectable } from "@angular/core";
import { NativeDateAdapter } from "@angular/material/core";
import { format } from "date-fns";

export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {
    let formatedDate = format(date, displayFormat);
    return formatedDate;
  }
}
