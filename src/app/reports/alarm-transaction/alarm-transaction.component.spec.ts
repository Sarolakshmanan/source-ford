import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmTransactionComponent } from './alarm-transaction.component';

describe('AlarmTransactionComponent', () => {
  let component: AlarmTransactionComponent;
  let fixture: ComponentFixture<AlarmTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
