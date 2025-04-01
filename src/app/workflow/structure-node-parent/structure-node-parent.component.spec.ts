import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureNodeParentComponent } from './structure-node-parent.component';

describe('StructureNodeParentComponent', () => {
  let component: StructureNodeParentComponent;
  let fixture: ComponentFixture<StructureNodeParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureNodeParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureNodeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
