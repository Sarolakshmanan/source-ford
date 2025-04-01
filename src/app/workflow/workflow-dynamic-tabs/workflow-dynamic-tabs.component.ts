import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
} from '@angular/core';
import { WorkflowService } from '../workflow-info/workflow.service';
import { WorkFlowParentTabContainerDirective } from './workflow-dynamic.directive';
import { StructureInfoComponent } from '../structure-info/structure-info.component';

@Component({
  selector: 'app-workflow-dynamic-tabs',
  templateUrl: './workflow-dynamic-tabs.component.html',
  styleUrls: ['./workflow-dynamic-tabs.component.scss'],
})
export class WorkflowDynamicTabsComponent implements OnInit {
  //scope
  tabs = [{ name: 'Units', id: 'idxcfg' }];
  NodeParentId: string = 'workflow-unit-1';
  selectedIndex = 0;
  nodeInfo: any;
  // viewchilds
  @ViewChild(WorkFlowParentTabContainerDirective)
  structContent: WorkFlowParentTabContainerDirective;

  constructor(
    private _ws: WorkflowService,
    private _resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.openingUnits();
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.selectedIndex = this.tabs.length;
    this.NodeParentId = `${this.NodeParentId}-${this.selectedIndex}`;
    this.tabs.push({ name: `New Tab ${this.selectedIndex}`, id: 'izsdfgv' });
  }

  openingUnits(): void {
    this._ws.openTabStatus().subscribe((items) => {
      if (items['status'] == 'success') {
        this.nodeInfo = items['data'].info;
        this.newTab();
      }
    });
  }
}
