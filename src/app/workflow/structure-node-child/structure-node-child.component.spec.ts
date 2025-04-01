import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureNodeChildComponent } from './structure-node-child.component';

describe('StructureNodeChildComponent', () => {
  let component: StructureNodeChildComponent;
  let fixture: ComponentFixture<StructureNodeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureNodeChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureNodeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
