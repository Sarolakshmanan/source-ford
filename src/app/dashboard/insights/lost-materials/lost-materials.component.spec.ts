import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostMaterialsComponent } from './lost-materials.component';

describe('LostMaterialsComponent', () => {
  let component: LostMaterialsComponent;
  let fixture: ComponentFixture<LostMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
