import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageExpandComponent } from './message-expand.component';

describe('MessageExpandComponent', () => {
  let component: MessageExpandComponent;
  let fixture: ComponentFixture<MessageExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
