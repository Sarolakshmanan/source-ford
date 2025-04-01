import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowInfoComponent } from './workflow-info/workflow-info.component';

const routes: Routes = [
  {
    path: 'design-create',
    component: WorkflowInfoComponent,
    data: { view: 'private' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkflowRoutingModule {}
