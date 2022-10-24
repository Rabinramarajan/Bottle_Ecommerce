import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ConnectionPositionPair,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { OverlayService } from '../../services/overlay/overlay.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit, OnDestroy {
  desktopObserver: any = {};
  tabletObserver: any = {};
  responsiveType = 'tablet';
  // isOpenNow = false;
  currentTemplate!: TemplateRef<any>;

  @Input() src = '';
  @Input() icon = '';
  @Input() label = '';
  @Input() filter = '';
  @Input() searchTemplate!: TemplateRef<any>;
  @Input() panelClass = 'search-pane';

  // @Input()
  // set isOpen(isOpen: boolean) {
  //   this.overLayService.isSearchboxOpen = isOpen || false;
  //   // console.log(this.isOpenNow);
  // }
  // get isOpen() {
  //   return this.overLayService.isSearchboxOpen;
  // }

  @ViewChild('searchbtn', { static: false })
  searchbtn!: ElementRef;
  // private overlayRef!: OverlayRef;
  constructor(
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    public breakpointObserver: BreakpointObserver,
    public overLayService: OverlayService
  ) {
    this.desktopObserver = breakpointObserver
      .observe(['(min-width: 1170px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.responsiveType = 'desktop';
        }
      });
    this.tabletObserver = breakpointObserver
      .observe(['(max-width: 1169px)'])
      .subscribe((result) => {
        if (result.matches) {
          this.responsiveType = 'tablet';
        }
      });
  }

  ngOnDestroy(): void {
    this.desktopObserver.unsubscribe();
    this.tabletObserver.unsubscribe();
  }

  ngOnInit(): void {}

  openSearch() {
    if (this.overLayService.searchboxOverlayRef) {
      if (!this.overLayService.searchboxOverlayRef.hasAttached()) {
        this.createOverlay();
      } else {
        this.overLayService.detachSearchBox();
      }
    } else {
      this.createOverlay();
    }
  }

  createOverlay() {
    let position = [
      new ConnectionPositionPair(
        { originX: 'center', originY: 'bottom' },
        { overlayX: 'center', overlayY: 'top' }
      ),
      new ConnectionPositionPair(
        { originX: 'center', originY: 'top' },
        { overlayX: 'center', overlayY: 'bottom' }
      ),
    ];
    // console.log(this.responsiveType);
    if (this.responsiveType === 'desktop') {
      position = [
        new ConnectionPositionPair(
          { originX: 'start', originY: 'bottom' },
          { overlayX: 'start', overlayY: 'top' }
        ),
        new ConnectionPositionPair(
          { originX: 'start', originY: 'top' },
          { overlayX: 'start', overlayY: 'bottom' }
        ),
      ];
    }

    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.searchbtn.nativeElement)
      .withPositions(position)
      .withPush(false);
    this.overLayService.searchboxOverlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'bg-transparent',
      panelClass: this.panelClass,
    });
    this.overLayService.searchboxOverlayRef
      .backdropClick()
      .subscribe((_) => this.overLayService.detachSearchBox());
    this.attachOverlay();
  }

  attachOverlay(): void {
    // this.isOpen = true;
    // if (!this.overlayRef.hasAttached()) {
    const periodSelectorPortal = new TemplatePortal(
      this.searchTemplate,
      this.vcr
    );
    this.overLayService.isSearchboxOpen = true;
    this.overLayService.searchboxOverlayRef.attach(periodSelectorPortal);
    // }
  }
}
