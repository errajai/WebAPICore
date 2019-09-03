import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextonesComponent } from './nextones.component';

describe('NextonesComponent', () => {
  let component: NextonesComponent;
  let fixture: ComponentFixture<NextonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
