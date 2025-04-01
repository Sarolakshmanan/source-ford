import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { StructureInfoComponent } from './structure-info/structure-info.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { StructureNodeParentComponent } from './structure-node-parent/structure-node-parent.component';
import { StructureNodeChildComponent } from './structure-node-child/structure-node-child.component';
import { WorkflowInfoComponent } from './workflow-info/workflow-info.component';
import { WorkflowDynamicTabsComponent } from './workflow-dynamic-tabs/workflow-dynamic-tabs.component';
import { WorkFlowParentContainerDirective } from './structure-node-parent/node-parent.directive';
import { WorkflowGeneralComponent } from './workflow-general/workflow-general.component';
import { WorkflowInlineComponent } from './workflow-inline/workflow-inline.component';
import { WorkFlowParentTabContainerDirective } from './workflow-dynamic-tabs/workflow-dynamic.directive';

@NgModule({
  declarations: [
    StructureInfoComponent,
    StructureNodeParentComponent,
    StructureNodeChildComponent,
    WorkflowInfoComponent,
    WorkflowDynamicTabsComponent,
    WorkFlowParentContainerDirective,
    WorkflowGeneralComponent,
    WorkflowInlineComponent,
    WorkFlowParentTabContainerDirective,
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    SharedComponentModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class WorkflowModule {}
