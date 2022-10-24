import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { FormInputModule } from '../form-input/form-input.module';
import { MatTableModule } from '@angular/material/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmptyStateModule } from '../empty-state/empty-state.module';
// import { SpinnerModule } from '../spinner/spinner.module';
// import { FullSpinnerModule } from '../full-spinner/full-spinner.module';
// import { SearchBoxModule } from '../search-box/search-box.module';
// import { CommonAlertModule } from '../alerts/common-alert/common-alert.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
// import { SlideDialogModule } from "../slide-dialog/slide-dialog.module";
import { MatRadioModule } from '@angular/material/radio';
// import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
// import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
// import { SlideDialogModule } from '../slide-dialog/slide-dialog.module';
// import { SessionAlertModule } from '../alerts/session-alert/session-alert.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TemplateModule } from '../template/template.module';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertModule } from '../alert/alert.module';
import { CommonAlertModule } from '../alert/common-alert/common-alert.module';
import { SessionAlertModule } from '../alert/session-alert/session-alert.module';
import { ViewPdfModule } from '../view-pdf/view-pdf.module';
import { PermissionModule } from '../permission/permission.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    FormInputModule,
    AlertModule,
    ViewPdfModule,
    // Material Design Import
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,

    // Application Imports
    TemplateModule,

    EmptyStateModule,
    // SearchBoxModule,
    CommonAlertModule,
    // SpinnerModule,

    // MatButtonModule,

    // OverlayModule,

    //
    // FullSpinnerModule,

    // MatCheckboxModule,
    // MatListModule,
    // MatButtonToggleModule,
    // MatExpansionModule,
    // MatRadioModule,
    // // MatTreeModule,
    // BreadcrumbModule,
    // MatChipsModule,
    // MatRippleModule,
    // SlideDialogModule,
    SessionAlertModule,
    PermissionModule,
    // MatSlideToggleModule,
    // TemplateModule
  ],
  exports: [
    DirectivesModule,
    PipesModule,
    FormInputModule,
    AlertModule,
    ViewPdfModule,
    CommonAlertModule,
    SessionAlertModule,
    // Material Design Import
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    EmptyStateModule,
    // Application Imports
    TemplateModule,
    PermissionModule,
  ],
})
export class ShareModule {}
