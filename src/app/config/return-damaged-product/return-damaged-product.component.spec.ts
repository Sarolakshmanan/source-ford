import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnDamagedProductComponent } from './return-damaged-product.component';

describe('ReturnDamagedProductComponent', () => {
  let component: ReturnDamagedProductComponent;
  let fixture: ComponentFixture<ReturnDamagedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnDamagedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDamagedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
