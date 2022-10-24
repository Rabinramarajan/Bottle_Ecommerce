import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FullSpinnerService } from './full-spinner.service';
@Injectable()
export class FullSpinnerInterceptor implements HttpInterceptor {
  constructor(private readonly fullSpinner: FullSpinnerService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(req.headers.get('spinner'));
    let spinnerSubscription: Subscription;
    if (req.headers.get('spinner') === 'true') {
      req.headers.delete('spinner');
      //   console.log('ok');
      spinnerSubscription = this.fullSpinner.emptySpinner.subscribe();
    }
    return next.handle(req).pipe(
      finalize(() => {
        if (spinnerSubscription) {
          spinnerSubscription.unsubscribe();
        }
      })
    );
  }
}
