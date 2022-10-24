import { Directive, ElementRef, Input } from '@angular/core';
import { Storage } from '@ionic/storage';

@Directive({
  selector: '[appAccess]',
})
export class AppAccessDirective {
  @Input('appAccess') elemId = '';
  @Input('parentId') parentId = '';

  replaceHtml =
    '<div class="v-center text-center"><h3>You are not authorized to view this page</h3></div>';

  constructor(private el: ElementRef, public storage: Storage) { }

  async ngOnInit() {
    let userData: any = {};
    await this.storage.get('userData').then((val) => {
      if (val) {
        userData = val;
        // console.log(val);
      } else {
        return;
      }
    });

    if (userData.userRights) {
      const rights = userData.userRights;
      const index = rights.map((e: any) => e.iViewName).indexOf(this.parentId);

      if (index !== -1) {
        const permissions = rights[index].resourcePermission;
        const isAvailableIndex = permissions
          .map((e: any) => e.iResourceName)
          .indexOf(this.elemId);
        if (isAvailableIndex !== -1) {
          if (this.elemId === this.parentId) {
            if (permissions[isAvailableIndex].iPermission !== '1') {
              this.el.nativeElement.innerHTML = this.replaceHtml;
            }
          } else {
            if (permissions[isAvailableIndex].iPermission === '0') {
              this.el.nativeElement.remove();
            }
          }
        } else {
          if (this.elemId === this.parentId) {
            this.el.nativeElement.innerHTML = this.replaceHtml;
          }
        }
      } else {
        // this.el.nativeElement.innerHTML = this.replaceHtml;
      }
    }
  }
}
