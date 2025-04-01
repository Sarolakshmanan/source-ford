import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallTransactionComponent } from './overall-transaction.component';

describe('OverallTransactionComponent', () => {
  let component: OverallTransactionComponent;
  let fixture: ComponentFixture<OverallTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
