import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFloatComponent } from './chat-float.component';

describe('ChatFloatComponent', () => {
  let component: ChatFloatComponent;
  let fixture: ComponentFixture<ChatFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
