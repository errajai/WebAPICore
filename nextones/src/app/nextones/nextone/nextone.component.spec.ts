import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextoneComponent } from './nextone.component';

describe('NextoneComponent', () => {
  let component: NextoneComponent;
  let fixture: ComponentFixture<NextoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
