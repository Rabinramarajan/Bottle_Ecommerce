import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { AppDatePipe } from './app-date/app-date.pipe';
import { AppCurrencyPipe } from './app-currency/app-currency.pipe';
import { AppSafePipe } from './app-safe/app-safe.pipe';
import { AppFilterPipe } from './app-filter/app-filter.pipe';
import { EncodeUrlPipe } from './encode-url/encode-url.pipe';

@NgModule({
  declarations: [
    AppDatePipe,
    AppCurrencyPipe,
    AppSafePipe,
    AppFilterPipe,
    EncodeUrlPipe,
  ],
  imports: [CommonModule],
  providers: [CurrencyPipe],
  exports: [
    AppDatePipe,
    AppCurrencyPipe,
    AppSafePipe,
    AppFilterPipe,
    EncodeUrlPipe
  ],
})
export class PipesModule { }
