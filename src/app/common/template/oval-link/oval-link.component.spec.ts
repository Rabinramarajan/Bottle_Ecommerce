import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvalLinkComponent } from './oval-link.component';

describe('OvalLinkComponent', () => {
  let component: OvalLinkComponent;
  let fixture: ComponentFixture<OvalLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvalLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OvalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
