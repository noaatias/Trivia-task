import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAnswerComponent } from './button-answer.component';

describe('ButtonAnswerComponent', () => {
  let component: ButtonAnswerComponent;
  let fixture: ComponentFixture<ButtonAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
