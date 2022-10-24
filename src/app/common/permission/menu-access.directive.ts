import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Directive({
  selector: '[appMenuAccess]',
})
export class MenuAccessDirective implements OnInit {
  @Input('appMenuAccess') elemId = '';
  constructor(private el: ElementRef, public storage: Storage) {}

  async ngOnInit() {
    // console.log('ok');
    let userData: any = {};
    await this.storage.get('userData').then((val) => {
      if (val) {
        userData = val;
        // console.log(val);
      } else {
        return;
      }
    });
    // console.log(userData);
    // const userData = JSON.parse(sessionStorage.getItem("FNPFPortalUserData"));
    if (userData.userRights) {
      const rights = userData.userRights;
      let i = 0;
      const checkFullAccessIndex = rights
        .map((e: any) => e.iViewName)
        .indexOf('fullaccess');
      if (checkFullAccessIndex === -1) {
        // console.log(userData);
        const index = rights.map((e: any) => e.iViewName).indexOf('PATDV');
        if (index !== -1) {
          const permissions = rights[index].resourcePermission;
          const isAvailableIndex = permissions
            .map((e: any) => e.iResourceName)
            .indexOf(this.elemId);
          for (i = 0; i > permissions; i++) {
            permissions[isAvailableIndex].iResourceName === 'CMTRM';
          }

          if (isAvailableIndex === -1) {
            this.el.nativeElement.remove();
          } else {
            /// if (permissions[isAvailableIndex].iResourceName === "REQTM")
            // {

            // }
            if (permissions[isAvailableIndex].iPermission !== '1') {
              this.el.nativeElement.remove();
            }
          }
        } else {
          this.el.nativeElement.remove();
        }
      }
    } else {
      this.el.nativeElement.remove();
    }
  }
}
