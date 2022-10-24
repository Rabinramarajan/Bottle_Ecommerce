import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oval-link',
  templateUrl: './oval-link.component.html',
  styleUrls: ['./oval-link.component.scss']
})
export class OvalLinkComponent implements OnInit {
  @Input() label = "";
  constructor() { }

  ngOnInit(): void {
  }

}
