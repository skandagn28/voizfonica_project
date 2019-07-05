import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInitiatorComponent } from './payment-initiator.component';

describe('PaymentInitiatorComponent', () => {
  let component: PaymentInitiatorComponent;
  let fixture: ComponentFixture<PaymentInitiatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInitiatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInitiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
