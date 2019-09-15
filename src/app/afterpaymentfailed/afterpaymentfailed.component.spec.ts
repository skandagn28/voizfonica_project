import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterpaymentfailedComponent } from './afterpaymentfailed.component';

describe('AfterpaymentfailedComponent', () => {
  let component: AfterpaymentfailedComponent;
  let fixture: ComponentFixture<AfterpaymentfailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterpaymentfailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterpaymentfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
