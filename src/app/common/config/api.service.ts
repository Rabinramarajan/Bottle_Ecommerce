import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { DataService } from "src/app/common/services/data/data.service";
// import { ApiEndpoint } from "./api.endpoints";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(public data: DataService) {}

getauditsearch(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('auditlog/GetAuditLogSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchauditlog(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('auditlog/searchAuditLog', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
gettoken(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('authenticateUser/gettoken', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
authenticateuser(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('authenticateUser/authenticateuser', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
forgotUserPassword(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('authenticateUser/admin/forgetuserpassword', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
resetUserPassword(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('authenticateUser/reset-password', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
validateVerificationCode(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('authenticateUser/ValidateVerificationCode', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
bindRecommendedRate(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/BindRecommendedRate', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
bindRequestRate(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/BindRequestRate', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
bindRequestedAmount(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/BindRequestedAmount', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transactionPdf(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransactionPdf', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getTransactionInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/getTransactionInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveTransactionDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/saveTransactionDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveTransactionReceivableDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveTransactionReceivableDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
sendToBankReceivableDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SendToBankReceivableDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
clearedReceivableDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ClearedReceivableDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
bouncedReceivableDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/BouncedReceivableDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveTransactionPayableDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveTransactionPayableDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transferredPayableDetail(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransferredPayableDetail', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
reversedPayableDetail(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ReversedPayableDetail', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
sendToBankPayableDetail(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SendToBankPayableDetail', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
calculatePayable(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/CalculatePayable', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getTransactionObject(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/getTransactionObject', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getTransactionbyCustomerNumber(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetTransactionbyCustomerNumber', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
updateTransaction(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/UpdateTransaction', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
calculateFinalRate(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/CalculateFinalRate', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getDailyRatebyCurrency(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetDailyRatebyCurrency', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
calculateReceivable(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/CalculateReceivable', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveRequest(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveRequest', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getRequestObject(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/getRequestObject', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openTransactionByID(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenTransactionByID', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openRequestByID(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenRequestByID', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
changeTransactionType(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ChangeTransactionType', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openselectedTransactionReceivable(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenselectedTransactionReceivable', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewTransactionReceivable(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewTransactionReceivable', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
openselectedTransactionPayable(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenselectedTransactionPayable', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewTransactionPayable(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewTransactionPayable', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getCashierBalanceSheetObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetCashierBalanceSheetObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getCashierbalanceSheetCashDetailObject(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetCashierbalanceSheetCashDetailObject', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getCashierbalanceSheetChequeDetailObject(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetCashierbalanceSheetChequeDetailObject', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveCashierBalanceSheetCashDetail(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveCashierBalanceSheetCashDetail', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
searchBalanceSheet(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SearchBalanceSheet', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getCasierBalanceSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetCasierBalanceSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
openSelectedSheet(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedSheet', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedCashierBalanceChequeDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedCashierBalanceChequeDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
validateBalance(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ValidateBalance', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
revertClosingBalance(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/RevertClosingBalance', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getOfficeDetailsInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetOfficeDetailsInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getOfficeBranchesInitial(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetOfficeBranchesInitial', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getOfficeSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/getOfficeSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchOffice(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SearchOffice', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedOfficeDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedOfficeDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getCashierbyOffice(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetCashierbyOffice', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getCounterbyOffice(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetCounterbyOffice', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getNewOfficeObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetNewOfficeObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOfficeDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/saveOfficeDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewOfficeAddress(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewOfficeAddress', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOfficeAddress(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveOfficeAddress', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedOffcieAddress(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedOffcieAddress', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewCashCounter(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewCashCounter', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveCashCounter(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveCashCounter', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedCashCounter(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedCashCounter', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewOfficeBank(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewOfficeBank', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOfficeBank(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveOfficeBank', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedOfficeBank(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedOfficeBank', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getCustomerData(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetCustomerData', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getTransactionSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/getTransactionSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchTransxn(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/Search_Transxn', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedPerson(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedPerson', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveCashTill(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SaveCashTill', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewSheet(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewSheet', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getDlaLimits(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetDlaLimits', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getRequestBetterRateTransaction(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetRequestBetterRate_Transaction', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
approveRequest(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ApproveRequest', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
rejectRequest(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/RejectRequest', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
searchTransaction(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SearchTransaction', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getNewReverseObject(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetNewReverseObject', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedReversePaymentDetail(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/OpenSelectedReversePaymentDetail', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getHandOverChequeInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/getHandOverChequeInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getHandOverChequeSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/GetHandOverChequeSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchCashierBalanceChequeDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/searchCashierBalanceChequeDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
handOverAllorSelectedCheque(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/HandOverAllorSelectedCheque', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transactionCode(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransactionCode', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getTransactionDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/GetTransactionDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewSearchPendingAuthorisation(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Cashier/CreateNewSearchPendingAuthorisation', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchPendingAuthorisation(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/SearchPendingAuthorisation', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
calculateTotalAmount(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/CalculateTotalAmount', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
allowDailyRate(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/AllowDailyRate', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transactionProceed(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransactionProceed', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transactionComplete(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransactionComplete', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
transactionCancel(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/TransactionCancel', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
changeDiscount(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/ChangeDiscount', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
loadCashCounterLink(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/LoadCashCounterLink', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
recvCurrencyChange(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/RecvCurrencyChange', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
bindRecommendedAmount(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Cashier/BindRecommendedAmount', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
searchTransCommunication(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Communication/searchTransCommunication', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getCommunicationSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Communication/GetCommunicationSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getcommunicationtrackinginitialdata(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('communicationtracking/GetCommunicationTrackingInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getCommunicationTrackingSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('communicationtracking/GetCommunicationTrackingSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchcommunicationtracking(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('communicationtracking/searchcommunicationtracking', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getconfigsearchobject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('config/getconfigsearchobject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchconfigs(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/searchconfigs', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
oenselectedconfig(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/oenselectedconfig', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openselectedconfigvalue(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/openselectedconfigvalue', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openselectedconfigdata(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/openselectedconfigdata', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
deleteConfigValue(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/deleteSelectedConfigValue', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
deleteConfigMetaData(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/deleteSelectedConfigMetaData', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveconfig(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/saveconfig', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveconfigvalue(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/saveconfigvalue', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveconfigmetadata(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('config/saveconfigmetadata', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createnewconfig(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('config/createnewconfig', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
createnewconfigvalue(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('config/createnewconfigvalue', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
createnewconfigmetadata(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('config/createnewconfigmetadata', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getCustomersInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getCustomersInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getPersonSearchObj(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getPersonSearchObj', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchPersons(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SearchPersons', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getNewPerson(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getNewPerson', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
savePersonDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/savePersonDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openPersonById(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/OpenPersonById', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewPersonAddress(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/CreateNewPersonAddress', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
savePersonAddressInfo(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/savePersonAddressInfo', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedAddressById(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/OpenSelectedAddressById', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
savePersonNotes(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/savePersonNotes', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewAddress(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/CreateNewAddress', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getOrgInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getOrgInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getOrgSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getOrgSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchOrganization(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SearchOrganization', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getNewOrganization(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/getNewOrganization', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
openOrganizationDetails(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/OpenOrganizationDetails', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveOrganization(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SaveOrganization', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewOrganizationAddress(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/CreateNewOrganizationAddress', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOrganizationAddressInfo(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SaveOrganizationAddressInfo', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewContact(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/CreateNewContact', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOrganizationContactInfo(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SaveOrganizationContactInfo', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewNotes(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Customer/CreateNewNotes', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveOrganizationNotes(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/SaveOrganizationNotes', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedOrganizationAddressById(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/OpenSelectedOrganizationAddressById', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openOrganizationConatactInfo(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Customer/OpenOrganizationConatactInfo', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getFinanceInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/getFinanceInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
createNewDailyRate(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/CreateNewDailyRate', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchAllDailyRates(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/SearchAllDailyRates', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getDailyRatesByDate(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/GetDailyRatesByDate', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedRow(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/OpenSelectedRow', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveDailyRates(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/SaveDailyRates', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getDRatesObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/getDRatesObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
approveDailyRates(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/ApproveDailyRates', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getDlaObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/GetDlaObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveDLALimit(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/SaveDLALimit', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedDlaLimit(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/OpenSelectedDlaLimit', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
searchDlaLimit(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/SearchDlaLimit', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getDlaSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/GetDlaSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/GetInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getBranchesInitial(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/GetBranchesInitial', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getNewCashRegisterSaveObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Finance/GetNewCashRegisterSaveObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getBranchCashCounters(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Finance/GetBranchCashCounters', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getGroupSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('group/getGroupSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getGroupDetailsInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('group/getGroupDetailsInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/searchGroups', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewGroup(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('group/createNewGroup', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/saveGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/openSelectedGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedRoleGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/openSelectedRoleGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewRoleGroup(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('group/createNewRoleGroup', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveRoleGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/saveRoleGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getRolesbyModule(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('group/loadConfigRoles', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getMessageDetailsInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Message/GetMessageDetailsInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getMessageSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Message/getMessageSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchMessages(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Message/SearchMessages', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedMessage(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Message/openSelectedMessage', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewMessage(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('Message/createNewMessage', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveMessage(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('Message/saveMessage', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
geResourceDetailsInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('resource/GetResourceDetailsInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getResourceSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('resource/GetResourceSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchResources(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('resource/searchResources', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedResource(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('resource/openSelectedResource', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewResource(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('resource/createNewResource', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveResource(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('resource/saveResource', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getRoleDetailsInitialData(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('role/getRoleDetailsInitialData', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getAllScreensbyModule(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/module/screen-name/get', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getRoleSearchObject(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('role/getRoleSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
searchRoles(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/searchRoles', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openSelectedRole(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/openSelectedRole', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
loadSelectedRoleResource(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/LoadSelectedRoleResource', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewRole(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('role/createNewRole', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveRole(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/saveRole', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveRoleWithRoleResource(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/saveRoleResource', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getScreensbyModule(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/LoadScreenNameByModuleValue', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
deleteRole(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('role/delete', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
searchUser(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/searchUsers', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getEmployeeHistory(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/GetEmployeeHistory', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getEmploymentHistoryById(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/GetEmploymentHistoryById', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveUser(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveUser', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getUIRoles(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/getbusUIRoles', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
getUserSearch(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/getUserSearchObject', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
createNewUser(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/createNewUser', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
openUser(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/openSelectedUser', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveEmploymentHistory(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveEmploymentHistory', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
newEmploymentHistory(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/newEmploymentHistory', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getResourceforDDL(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/GetResourceforDDL', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
getInitialDataForUser(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/getInitialDataForUser', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
 
createNewUserEmployment(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/createNewUserEmployment', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveUserEmployment(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveUserEmployment', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openUserEmployment(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/openUserEmployment', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
saveUserContactInfo(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveUserContactInfo', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
refreshPage(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/RefreshPage', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
getBranch(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/GetBranch', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
getTeam(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/GetTeam', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewUserGroup(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/createNewUserGroup', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveUserGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveUserGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openUserGroup(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/openUserGroup', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
createNewUserTeam(options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data.getData('user/createNewUserTeam', options).pipe(
      finalize(() => this.data.serviceCompleted()),
      catchError((err) => {
        options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
        return throwError(err);
      })
    );
}
  
saveUserTeam(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/saveUserTeam', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
  
openUserTeam(body: any, options?: any): Observable<any> {
    this.data.serviceStarted();
    options === undefined
      ? (options = this.data.defaultOptions)
      : (options = this.data.setOptions(options));
    return this.data
      .postData('user/openUserTeam', body, options)
      .pipe(
        finalize(() => this.data.serviceCompleted()),
        catchError((err) => {
          options? options.hideErrorMethod ? '' : this.data.errorMethod(err): '';
          return throwError(err);
        })
      );
}
 
}
