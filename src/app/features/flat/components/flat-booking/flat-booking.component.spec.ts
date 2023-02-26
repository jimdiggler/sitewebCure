import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatBookingComponent } from './flat-booking.component';

describe('FlatBookingComponent', () => {
  let component: FlatBookingComponent;
  let fixture: ComponentFixture<FlatBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlatBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
