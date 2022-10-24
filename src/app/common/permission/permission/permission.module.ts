import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuAccessDirective } from "./menu-access.directive";
import { AppAccessDirective } from "./app-access.directive";
import { ButtonAccessDirective } from "./button-access.directive";
import { AppAccessPipe } from './app-access.pipe';
import { TabAccessDirective } from './tab-access.directive';
import { RoleAccessDirective } from './role-access.directive';

@NgModule({
  declarations: [
    MenuAccessDirective,
    AppAccessDirective,
    ButtonAccessDirective,
    AppAccessPipe,
    TabAccessDirective,
    RoleAccessDirective,
  ],
  imports: [CommonModule],
  exports: [
    MenuAccessDirective,
    AppAccessDirective,
    ButtonAccessDirective,
    AppAccessPipe,
    TabAccessDirective,
    RoleAccessDirective
  ],
})
export class PermissionModule { }
