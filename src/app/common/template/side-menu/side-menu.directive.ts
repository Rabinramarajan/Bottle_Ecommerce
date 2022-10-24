import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, HostListener, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OverlayService } from '../../services/overlay/overlay.service';

@Directive({
  selector: '[appSideMenu]'
})
export class SideMenuDirective implements OnInit, OnDestroy {
  private unsubscribe = new Subject();
  @Input() appSideMenu!: TemplateRef<object>;
  @Input() backdropClass = 'side-menu-backdrop';
  constructor(
    private overlay: Overlay,
    private overlayService: OverlayService,
    private vcr: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    // this.createOverlay();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  @HostListener('click', ['$event']) onClick(event: any) {
    this.createOverlay();
  }
  @HostListener('touch', ['$event']) onTouch(event: any) {
    this.createOverlay();
  }

  // @HostListener('mouseenter', ['$event']) mouseEnter(event: any) {
  //   this.createOverlay();
  // }


  private createOverlay(): void {
    this.overlayService.detachSideMenu();
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .global()
      .left('90px')
      .top('50px');
    this.overlayService.sideMenuOverlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: this.backdropClass,
      panelClass: 'side-menu-pane',
      width: 250,
      maxWidth: 250
    });
    // this.overlayService.sideMenuOverlayRef
    //   .updateSize({
    //     width: 350
    //   });

    this.overlayService.sideMenuOverlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.overlayService.detachSideMenu();
      });
    this.attachOverlay();
  }

  private attachOverlay() {
    const sideMenuTemplate = new TemplatePortal(
      this.appSideMenu,
      this.vcr
    );

    this.overlayService.sideMenuOverlayRef.attach(sideMenuTemplate);
  }

}
