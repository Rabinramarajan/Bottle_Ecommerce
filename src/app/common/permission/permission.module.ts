import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuAccessDirective } from "./menu-access.directive";
import { AppAccessDirective } from "./app-access.directive";
import { ButtonAccessDirective } from "./button-access.directive";

@NgModule({
  declarations: [
    MenuAccessDirective,
    AppAccessDirective,
    ButtonAccessDirective,
  ],
  imports: [CommonModule],
  exports: [MenuAccessDirective, AppAccessDirective, ButtonAccessDirective],
})
export class PermissionModule {}
