import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { MessageBoxService } from '../message-box.service';

@Component({
  selector: 'app-message-expand',
  templateUrl: './message-expand.component.html',
  styleUrls: ['./message-expand.component.scss']
})
export class MessageExpandComponent implements OnInit {

  constructor(
    public messageBoxService: MessageBoxService,
    public data: DataService
  ) { }

  ngOnInit(): void {
  }

}
