import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTransactionComponent } from './stock-transaction.component';

describe('StockTransactionComponent', () => {
  let component: StockTransactionComponent;
  let fixture: ComponentFixture<StockTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
