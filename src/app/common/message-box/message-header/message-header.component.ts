import { Component, OnInit } from '@angular/core';
import { Message } from '../../config/app.classes';
import { DataService } from '../../services/data/data.service';
import { MessageBoxService } from '../message-box.service';

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.scss']
})
export class MessageHeaderComponent implements OnInit {

  constructor(
    public messageBoxService: MessageBoxService,
    public data: DataService
  ) { }

  ngOnInit(): void {
  }

  closeErrorMessageBox() {
    this.data.message = new Message();
    this.messageBoxService.closeErrorMessageBox();
  }

}
