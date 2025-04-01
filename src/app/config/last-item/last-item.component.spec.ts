import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastItemComponent } from './last-item.component';

describe('LastItemComponent', () => {
  let component: LastItemComponent;
  let fixture: ComponentFixture<LastItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
