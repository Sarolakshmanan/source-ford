import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { InsightsComponent } from './insights/insights.component';
import { AvailableStocksComponent } from './insights/available-stocks/available-stocks.component';
import { DamagedListComponent } from './insights/damaged-list/damaged-list.component';
import { StockTransactionComponent } from './insights/stock-transaction/stock-transaction.component';
import { UserAgainstComponent } from './insights/user-against/user-against.component';
import { CustomerRangeComponent } from './insights/customer-range/customer-range.component';
import { LostMaterialsComponent } from './insights/lost-materials/lost-materials.component';
import { NonReturnedMaterialComponent } from './insights/non-returned-material/non-returned-material.component';
import { UserAgainstMaterialComponent } from './insights/user-against-material/user-against-material.component';
import { PlsAlarmHistoryComponent } from './insights/pls-alarm-history/pls-alarm-history.component';
import { PlcAlaramsComponent } from './insights/plc-alarams/plc-alarams.component';
import { GraphComponent } from './insights/graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { PieChartComponent } from './insights/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    InsightsComponent,
    AvailableStocksComponent,
    DamagedListComponent,
    StockTransactionComponent,
    UserAgainstComponent,
    CustomerRangeComponent,
    LostMaterialsComponent,
    NonReturnedMaterialComponent,
    UserAgainstMaterialComponent,
    PlsAlarmHistoryComponent,
    PlcAlaramsComponent,
    GraphComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentModule,
    HighchartsChartModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
