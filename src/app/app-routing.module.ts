import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared-component/shared/pagenotfound/pagenotfound.component';
import { UnauthorizeComponent } from './shared-component/shared/unauthorize/unauthorize.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/inital-activity/inital-activity.module').then(
        (login) => login.InitalActivityModule
      ),
    data: { view: 'public' },
  },
  {
    path: 'workflow',
    loadChildren: () =>
      import('../app/workflow/workflow.module').then((m) => m.WorkflowModule),
    data: { view: 'private' },
  },
  {
    path: 'access-console',
    loadChildren: () =>
      import('../app/access-control/access-control.module').then(
        (m) => m.AccessControlModule
      ),
    data: { view: 'private' },
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: { view: 'private' },
  },
  {
    path: 'config',
    loadChildren: () =>
      import('../app/config/config.module').then((m) => m.ConfigModule),
    data: { view: 'private' },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('../app/reports/reports.module').then((m) => m.ReportsModule),
    data: { view: 'private' },
  },
  {
    path: 'un-authorize',
    pathMatch: 'full',
    component: UnauthorizeComponent,
    data: { view: 'private' },
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
