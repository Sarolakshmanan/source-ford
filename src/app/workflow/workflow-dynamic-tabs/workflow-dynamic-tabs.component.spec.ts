import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowDynamicTabsComponent } from './workflow-dynamic-tabs.component';

describe('WorkflowDynamicTabsComponent', () => {
  let component: WorkflowDynamicTabsComponent;
  let fixture: ComponentFixture<WorkflowDynamicTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowDynamicTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowDynamicTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
