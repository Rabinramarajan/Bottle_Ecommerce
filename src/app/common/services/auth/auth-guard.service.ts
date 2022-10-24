import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStorageService } from '../app-storage/app-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, public storage: AppStorageService) {}

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.storage.get('userData').then((val) => {
        if (val) {
          if (val.keyToken !== '') {
            observer.next(true);
            observer.complete();
          } else {
            observer.next(false);
            observer.complete();
          }
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
