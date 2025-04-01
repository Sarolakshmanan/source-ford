import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights/insights.component';
import { AvailableStocksComponent } from './insights/available-stocks/available-stocks.component';
import { DamagedListComponent } from './insights/damaged-list/damaged-list.component';
import { StockTransactionComponent } from './insights/stock-transaction/stock-transaction.component';
import { CustomerRangeComponent } from './insights/customer-range/customer-range.component';
import { LostMaterialsComponent } from './insights/lost-materials/lost-materials.component';
import { NonReturnedMaterialComponent } from './insights/non-returned-material/non-returned-material.component';
import { UserAgainstComponent } from './insights/user-against/user-against.component';
import { UserAgainstMaterialComponent } from './insights/user-against-material/user-against-material.component';
import { PlcAlaramsComponent } from './insights/plc-alarams/plc-alarams.component';
import { PlsAlarmHistoryComponent } from './insights/pls-alarm-history/pls-alarm-history.component';
import { PieChartComponent } from './insights/pie-chart/pie-chart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'insight',
    pathMatch: 'full',
  },
  {
    path: 'insight',
    component: InsightsComponent,
  },
  {
         path: 'available-stocks',
         component: AvailableStocksComponent,
       
       },
       {
        path: 'customer-range',
        component: CustomerRangeComponent,
      },
       {
        path: 'damaged-list',
        component: DamagedListComponent,
      },
      {
        path: 'lost-material',
        component: LostMaterialsComponent,
      },
      {
        path: 'non-returned-material',
        component: NonReturnedMaterialComponent,
      },
      {
        path: 'user-against',
        component: UserAgainstMaterialComponent,
      },
      {
        path: 'plc-alarm',
        component: PlcAlaramsComponent,
      },
      {
        path: 'stock-transaction',
        component: StockTransactionComponent,
      },
      {
        path: 'plc-alarm-history',
        component: PlsAlarmHistoryComponent,
      },
      {
        path: 'pie-charts',
        component: PieChartComponent,
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
