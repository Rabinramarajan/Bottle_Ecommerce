import { ApiService } from 'src/app/common/config/api.service';
import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root',
})
export class InitialDataService {
  userInitialData: any = {
    DDLGender: [],
    DDLUserDesignation: [],
    DDLUserStatus: [],
    Group: [],
    DDLRoleStatus: [],
    DDLBranch: [],
    DDLLocation: [],
    Team: [],
  };
  roleInitialData: any = {
    DDLRoleStatus: [],
    DDLScreenName: [],
    DDLModule: [],
    DDLPermissions: [],
    selectScreenList: [],
  };
  resourceInitialData: any = {
    DDLResourceType: [],
    DDLViewName: [],
  };
  groupInitialData: any = {
    DDLGroupStatus: [],
    DDLRoleStatus: [],
    DDLModuleName: [],
    Roles: [],
  };
  commTrackingInitialData: any = {};
  customersInitialData: any = {
    DDLconfigGender: [],
    DDLconfigNationality: [],
    DDLconfigPersonStatus: [],
    DDLconfigUserDesignation: [],
  };
  organizationInitialData: any = {};
  officeInitialData: any = {
    DDLconfigOfficeType: [],
    DDLconfigOfficeStatus: [],
    DDLconfigAddressStatus: [],
    DDLBranchCodes: [],
  };
  handOverChequeInitialData: any = {
    configCurrency:[]
  };
  financeInitialData: any = {
    DDLconfigCurrency: [],
    DDLconfigCashiers: [],
  };
  transactionInitialData: any = {
    OfficeNames: [],
    configCashiers: [],
    DDLRequestStatus: [],
    DDLCustomerType: [],
    DDLReceivableMode: [],
    DDLPayableMode: [],
    DDLconfigCustomerTypeForSearch: [],
    DDLCodeActionStatus: [],
    DDLTransxnMode: [],
    DDLCurrency: [],
    DDLCodeSheetDetail: [],
    DDLCountries: [],
    DDLRequestMod: [],
    configOfficeBanks:[],
    DDLTransxnType:[],
    DDLTransactionStatus:[]
  };
  constructor(public data: DataService, public apiService: ApiService) {}

  getInitialDataForUser(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.getInitialDataForUser({}).subscribe((success: any) => {
        success.data.forEach((element: any) => {
          this.userInitialData[element.key] = element.value;
        });
        resolve(true);
      });
    });
  }
  getRoleDetailsInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getRoleDetailsInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.roleInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
  geResourceDetailsInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .geResourceDetailsInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.resourceInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
  getGroupDetailsInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getGroupDetailsInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.groupInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
  getcommunicationtrackinginitialdata(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getcommunicationtrackinginitialdata({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.commTrackingInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
  getCustomersInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.getCustomersInitialData({}).subscribe((success: any) => {
        success.data.forEach((element: any) => {
          this.customersInitialData[element.key] = element.value;
        });
        resolve(true);
      });
    });
  }
  getOrgInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.getOrgInitialData({}).subscribe((success: any) => {
        success.data.forEach((element: any) => {
          this.organizationInitialData[element.key] = element.value;
        });
        resolve(true);
      });
    });
  }

  getOfficeDetailsInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getOfficeDetailsInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.officeInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }

  getHandOverChequeInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getHandOverChequeInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.handOverChequeInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
  getFinanceInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService.getFinanceInitialData({}).subscribe((success: any) => {
        success.data.forEach((element: any) => {
          this.financeInitialData[element.key] = element.value;
        });
        resolve(true);
      });
    });
  }
  getTransactionInitialData(): Promise<boolean> {
    return new Promise((resolve) => {
      this.apiService
        .getTransactionInitialData({})
        .subscribe((success: any) => {
          success.data.forEach((element: any) => {
            this.transactionInitialData[element.key] = element.value;
          });
          resolve(true);
        });
    });
  }
}
