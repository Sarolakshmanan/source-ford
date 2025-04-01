import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsAlarmHistoryComponent } from './pls-alarm-history.component';

describe('PlsAlarmHistoryComponent', () => {
  let component: PlsAlarmHistoryComponent;
  let fixture: ComponentFixture<PlsAlarmHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlsAlarmHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlsAlarmHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
