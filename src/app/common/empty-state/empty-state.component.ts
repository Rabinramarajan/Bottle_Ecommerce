import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit, AfterViewInit {
  @Input() img = '';
  @Input() title = 'No records found';
  @Input() subtitle = 'Try adjusting your search or filter options to find what you\'re looking for';
  constructor() { }

  ngOnInit(): void {
    if (this.img === '') {
      this.img = 'assets/svg/empty-state/' + (Math.floor(Math.random() * 4) + 1) + '.svg';
    }
  }
  ngAfterViewInit() {
    // if(this.img === ''){
    //   this.img = 'assets/empty-state/'+ (Math.floor(Math.random() * 4) + 1) +'.svg';
    // }
  }

}
