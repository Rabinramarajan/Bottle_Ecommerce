import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, Input, OnInit, Optional, Self, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { FromInputControl } from '../form-input-control';

@Component({
  selector: 'app-password-control',
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.scss'],
})
export class PasswordControlComponent extends FromInputControl implements OnInit, AfterViewInit {
  type = 'password';
  hide = true;
  isStrengthOpen = false;
  private overlayRef!: OverlayRef;
  @Input() public strength = false;
  @ViewChild('forminput', { static: true }) forminput!: any;
  @ViewChild('popContent') popContent!: TemplateRef<any>;
  // for input & output check form input control

  constructor(@Self() @Optional() public control: NgControl, public vcr: ViewContainerRef, private overlay: Overlay,) {
    super();
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.setValidate(this.control);
  }

  ngAfterViewInit(): void {

    // console.log(this.searchbox);
    fromEvent(this.forminput.nativeElement, 'focus').pipe(

    ).subscribe(() => {
      console.log(this.strength);
      if (this.strength) {
        this.doOpenPasswordStrength();
      }
    });
    fromEvent(this.forminput.nativeElement, 'blur').pipe(

    ).subscribe(() => {
      if (this.strength) {
        this.close();
      }
    });
  }

  toggleType() {
    if (this.hide) {
      this.hide = false;
      this.type = 'text';
    } else {
      this.hide = true;
      this.type = 'password';
    }
  }


  private getOverlayPosition(origin: any) {
    const positions = [
      new ConnectionPositionPair(
        { originX: 'start', originY: 'bottom' },
        { overlayX: 'start', overlayY: 'top' }
      )
    ];
    return this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }



  doOpenPasswordStrength() {
    if (!this.isStrengthOpen) {
      console.log(this.isStrengthOpen);
      this.openDropdown(this.forminput.nativeElement, this.popContent, this.vcr);
    }
  }


  openDropdown(origin: any, xtemplate: any, viewRef: any) {
    this.overlayRef = this.overlay.create({
      width: origin.offsetWidth > 200 ? origin.offsetWidth : 200,
      maxHeight: 40 * 6,
      minHeight: 40 * 4,
      panelClass: 'strength-dropdown',
      backdropClass: '',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.getOverlayPosition(origin)
    });

    const template = new TemplatePortal(xtemplate, viewRef);
    this.overlayRef.attach(template);
    this.isStrengthOpen = true;
    overlayClickOutside(this.overlayRef, origin).subscribe(() => this.close());
  }

  close() {
    this.isStrengthOpen = false;
    this.overlayRef.detach();
    // this.overlayRef = null;  
  }

}

export function overlayClickOutside(overlayRef: OverlayRef, origin: HTMLElement) {
  return fromEvent<MouseEvent>(document, 'click')
    .pipe(
      filter(event => {
        const clickTarget = event.target as HTMLElement;
        const notOrigin = clickTarget !== origin;
        const notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false);
        return notOrigin && notOverlay;
      }),
      takeUntil(overlayRef.detachments())
    )
}  
