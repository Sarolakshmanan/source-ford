import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcAlaramsComponent } from './plc-alarams.component';

describe('PlcAlaramsComponent', () => {
  let component: PlcAlaramsComponent;
  let fixture: ComponentFixture<PlcAlaramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlcAlaramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlcAlaramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
