import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerRatingComponent } from './marker-rating.component';

describe('MarkerRatingComponent', () => {
  let component: MarkerRatingComponent;
  let fixture: ComponentFixture<MarkerRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
