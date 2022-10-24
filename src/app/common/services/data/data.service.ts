import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AlertService } from '../../alert/alert.service';
import { DeleteAlertComponent } from '../../alert/delete-alert/delete-alert.component';
import { Message } from '../../config/app.classes';
import { AppSettingsService } from '../app-settings/app-settings.service';
import { AppStorageService } from '../app-storage/app-storage.service';
import { SessionAlertComponent } from '../../alert/session-alert/session-alert.component';
import { CommonAlertComponent } from '../../alert/common-alert/common-alert.component';
import { NavigationStart, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { OverlayService } from '../overlay/overlay.service';
import { MessageBoxService } from '../../message-box/message-box.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly defaultOptions: any = {
    hideErrorMethod: false,
    hideFullSpinner: false,
    hidejwt: false,
  };
  basePath = '';
  loadingTrue = false;
  btnClicked = false;
  token = '';
  message = new Message();
  messageBoxExpandTrue = false;
  pattern = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%|"'~^&*-]).{8,}$/;
  constructor(
    public storage: AppStorageService,
    public appSetting: AppSettingsService,
    private http: HttpClient,
    private dialog: MatDialog,
    private alert: AlertService,
    private snackBar: MatSnackBar,
    public router: Router,
    public appService: AppService,
    public overlayService: OverlayService,
    public messageBoxService: MessageBoxService
  ) {
    this.basePath = this.appSetting.environment.basePath;
    this.router.events.subscribe((val) => {
      // if (val instanceof NavigationStart) {
      //   this, overlayService.detachSideMenu();
      //   this.overlayService.detachSearchBox();
      //   this.appService.screenName = '';
      //   this.message = new Message();
      //   this.messageBoxExpandTrue = false;
      // }
      if (val instanceof NavigationStart) {
        this.clearMessageBox();
        // this.messageBoxExpandTrue = false;
        // const urls = ['/', '/login'];
        // const index = urls.indexOf(val.url);
        // if (index !== -1) {
        //   this.token = '';
        //   this.storage.clear();
        // }
        // if (this.router.url === this.userDefaultLandingPage) {
        //   console.log('logout alert');
        // }
        // this.url = val.url;
        // console.log(val);
      }
    });
  }

  clearMessageBox() {
    this.message = new Message();
    this.messageBoxService.detachOverlay();
  }

  async getToken() {
    await this.storage.get('userData').then((val) => {
      if (val) {
        this.appService.userData = val;
        this.token = val.keyToken;
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  checkToken(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (this.token !== '') {
        resolve(true);
      } else {
        await this.storage.get('userData').then((val) => {
          if (val) {
            this.token = val.keyToken;
            resolve(true);
          } else {
            this.router.navigateByUrl('/login');
            resolve(false);
          }
        });
      }
    });
  }

  setOptions(options: any) {
    for (const opPath of Object.keys(this.defaultOptions)) {
      options[opPath] === undefined
        ? (options[opPath] = this.defaultOptions[opPath])
        : '';
    }
    return options;
  }

  serviceStarted() {
    this.loadingTrue = true;
    this.btnClicked = true;
    this.clearMessageBox();
  }
  serviceCompleted() {
    this.loadingTrue = false;
    this.btnClicked = false;
  }

  getData(path: any, options?: any): Observable<any> {
    // const tokenAvb = async () => await this.checkToken();
    // console.log(tokenAvb);
    // console.log(this.basePath);
    let header = {};
    if (options) {
      if (options.hidejwt) {
        header = new HttpHeaders({
          Spinner: options.hideFullSpinner ? '' : 'true',
        });
      } else {
        header = new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
          Spinner: options.hideFullSpinner ? '' : 'true',
        });
      }
    } else {
      header = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        Spinner: options.hideFullSpinner ? '' : 'true',
      });
    }
    return this.http.get(this.basePath + path, { headers: header });
  }

  getDataAnonymous(path: any, options?: any): Observable<any> {
    const header = new HttpHeaders({
      Spinner: options.hideFullSpinner ? '' : 'true',
    });
    return this.http.get(this.basePath + path, { headers: header });
  }

  postData(path: any, body: any, options?: any) {
    let header = {};
    if (options) {
      if (options.hidejwt) {
        header = new HttpHeaders({
          Spinner: options.hideFullSpinner ? '' : 'true',
        });
      } else {
        header = new HttpHeaders({
          Authorization: 'Bearer ' + this.token,
          Spinner: options.hideFullSpinner ? '' : 'true',
        });
      }
    } else {
      header = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
        Spinner: options.hideFullSpinner ? '' : 'true',
      });
    }
    return this.http.post(this.basePath + path, body, { headers: header });
  }

  postDataAnonymous(path: any, body: any, options?: any) {
    const header = new HttpHeaders({
      Spinner: options.hideFullSpinner ? '' : 'true',
    });
    return this.http.post(this.basePath + path, body, { headers: header });
  }

  postPDFData(path: any, body: any, options?: any) {
    const header = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
      Spinner: options.hideFullSpinner ? '' : 'true',
    });
    return this.http.post(this.basePath + path, body, {
      headers: header,
      responseType: 'blob',
    });
  }

  testErrorMsg() {
    this.message = {
      infoMessage: {
        msgID: 0,
        msgType: 0,
        msgDescription: '',
      },
      errorMessage: [
        { msgID: 0, msgType: 0, msgDescription: 'UserLoginId Already Exists' },
      ],
      hasError: true,
    };
    this.messageBoxService.expandMessageBox(0);
    // setTimeout(() => {
    //   this.messageBoxExpandTrue = true;
    // }, 400);
  }

  // Error Methods
  errorMethod(err: any) {
    console.log(err);
    switch (err.status) {
      case 0:
        if (err.statusText === 'Unknown Error') {
          this.internalServerError('');
        }
        break;
      case 400:
        this.message = err.error;
        setTimeout(() => {
          this.messageBoxExpandTrue = true;
        }, 400);
        break;
      case 401:
        this.confirmSessionOut('');
        break;
      case 500:
        this.internalServerError(err.error);
        break;
      case 501:
        this.internalServerError(err.error);
        break;
      case 503:
        this.internalServerError(err.error);
        break;
      default:
        break;
    }
  }

  async internalServerError(msg: any) {
    console.log(msg);
    let xmsg = '';
    msg !== '' && msg != null
      ? (xmsg = msg)
      : (xmsg =
          'Bula, We are currently facing some technical issues right now. Please try again after some time.');
    // console.log(xmsg);
    const dialogRef = this.dialog.open(CommonAlertComponent, {
      width: '450px',
      disableClose: true,
      data: {
        msg: xmsg,
        trueBtnText: 'Ok',
        trueBtnColor: 'danger',
        trueRaised: true,
        falseBtnText: '',
        falseBtnColor: 'danger',
        showTrue: true,
        showFalse: false,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  confirmSessionOut(msg: any) {
    let xmsg = '';
    msg !== ''
      ? (xmsg = msg)
      : (xmsg = 'Your session expired. Please login again to continue.');
    const dialogRef = this.dialog.open(SessionAlertComponent, {
      width: '350px',
      disableClose: true,
      data: {
        msg: xmsg,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigateByUrl('/');
      }
    });
  }

  successMessage(msg: any) {
    this.snackBar.open(msg, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['bg-primary'],
      duration: 3000,
    });
  }

  errorMesaageOnly(msg: any) {
    this.constructErrorMsg(msg);
  }

  constructErrorMsg(val: any) {
    this.message.hasError = true;
    this.message.errorMessage = [];
    const obj = {
      msgID: 0,
      msgType: 0,
      msgDescription: val,
    };
    this.message.errorMessage.push(obj);
    setTimeout(() => {
      this.messageBoxExpandTrue = true;
    }, 400);
  }
  pdf(path: any, credentials: any) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + this.token,
      });
      this.http
        .post(this.basePath + path, credentials, {
          headers: headers,
          responseType: 'blob',
        })
        .subscribe(
          (res) => {
            const resp = new Blob([res], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(resp);
            resolve(fileURL);
            // this.openBrowser(fileURL);
            // window.open(fileURL, '_blank');
          },
          (err) => {
            reject(err);
          }
        );
    });

    const headers = new HttpHeaders({ Authorization: 'Basic ' + this.token });
  }
}
