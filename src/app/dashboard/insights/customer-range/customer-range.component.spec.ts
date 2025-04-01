import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRangeComponent } from './customer-range.component';

describe('CustomerRangeComponent', () => {
  let component: CustomerRangeComponent;
  let fixture: ComponentFixture<CustomerRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
