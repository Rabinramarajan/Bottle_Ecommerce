import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  HostListener,
  Injectable,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { MessageExpandComponent } from './message-expand/message-expand.component';

@Injectable({
  providedIn: 'root',
})
export class MessageBoxService {
  private overlayRef!: OverlayRef;
  closing = false;
  isExpanded = false;
  bottomValue = '0px';
  panelClass = 'message-box-expanded';
  backdropClass = 'bg-message';
  hasBackdrop = true;
  message = true;
  errorMessage = false;
  warningMessage = false;
  infoMessage = false;
  // messageExpanded!: TemplateRef<any>;
  messageViewRefContainer: any;
  @HostListener('document:keydown', ['$event']) private handleKeydown(
    event: KeyboardEvent
  ) {
    if (event.key === 'Escape') {
      this.detachOverlay();
    }
  }

  constructor(private overlay: Overlay) {}

  expandMessageBox(val: number) {
    if (this.overlayRef) {
      if (!this.overlayRef.hasAttached()) {
        this.createOverlay(val);
      } else {
        this.allFalse();
        this.detachOverlay();
      }
    } else {
      this.createOverlay(val);
    }
  }

  closeErrorMessageBox() {
    this.allFalse();
    this.detachOverlay();
  }

  createOverlay(val: number) {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()
      .bottom(this.bottomValue)
      .left('0')
      .right('0');
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: this.hasBackdrop,
      panelClass: this.panelClass,
      backdropClass: this.backdropClass,
    });
    this.overlayRef.backdropClick().subscribe((_) => this.detachOverlay());
    this.setErrorMessageView(val);
    this.attachOverlay();
  }

  attachOverlay(val?: undefined): void {
    // this.isOpen = true;
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new ComponentPortal(
        MessageExpandComponent,
        this.messageViewRefContainer
      );
      // const periodSelectorPortal = new TemplatePortal(
      //   this.messageExpanded,
      //   this.messageViewRefContainer
      // );
      this.isExpanded = true;
      this.overlayRef.attach(periodSelectorPortal);
    } else {
      this.allFalse();
      this.detachOverlay();
    }
  }

  detachOverlay(): void {
    if (this.overlayRef) {
      // this.isOpen = false;
      if (this.overlayRef.hasAttached()) {
        this.closing = true;
        setTimeout(() => {
          this.overlayRef.detach();
          this.isExpanded = false;
          this.closing = false;
          this.allFalse();
          setTimeout(() => {
            this.overlayRef.dispose();
          }, 1000);
        }, 600);
      }
    }
  }

  setErrorMessageView(val: number) {
    this.errorMessage = false;
    this.warningMessage = false;
    this.infoMessage = false;
    switch (val) {
      case 0:
        this.errorMessage = true;
        break;
      case 1:
        this.warningMessage = true;
        break;
      case 2:
        this.infoMessage = true;
        break;
      default:
        break;
    }
  }

  allFalse() {
    this.errorMessage = false;
    this.warningMessage = false;
    this.infoMessage = false;
  }
}
