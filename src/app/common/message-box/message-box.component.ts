import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { DataService } from '../services/data/data.service';
import { MessageBoxService } from './message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit, AfterViewInit {
  @Input() public bottomValue = '0px';
  @Input() public panelClass = 'message-box-expanded';
  @Input() public backdropClass = 'bg-message';
  @Input() public hasBackdrop = true;
  @Input() public message = true;

  constructor(
    // private overlay: Overlay,
    private vcr: ViewContainerRef,
    public data: DataService,
    public messageBoxService: MessageBoxService
  ) {
    this.messageBoxService.messageViewRefContainer = this.vcr;

    this.messageBoxService.bottomValue = this.bottomValue;
    this.messageBoxService.panelClass = this.panelClass;
    this.messageBoxService.backdropClass = this.backdropClass;
    this.messageBoxService.hasBackdrop = this.hasBackdrop;
    this.messageBoxService.message = this.message;

  }

  ngOnInit(): void { }

  ngAfterViewInit() {
  }
}
