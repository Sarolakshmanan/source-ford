import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonReturnedMaterialComponent } from './non-returned-material.component';

describe('NonReturnedMaterialComponent', () => {
  let component: NonReturnedMaterialComponent;
  let fixture: ComponentFixture<NonReturnedMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonReturnedMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonReturnedMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
