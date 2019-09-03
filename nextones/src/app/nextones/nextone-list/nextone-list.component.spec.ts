import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextoneListComponent } from './nextone-list.component';

describe('NextoneListComponent', () => {
  let component: NextoneListComponent;
  let fixture: ComponentFixture<NextoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
