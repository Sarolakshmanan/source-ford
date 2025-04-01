import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowInlineComponent } from './workflow-inline.component';

describe('WorkflowInlineComponent', () => {
  let component: WorkflowInlineComponent;
  let fixture: ComponentFixture<WorkflowInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowInlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
