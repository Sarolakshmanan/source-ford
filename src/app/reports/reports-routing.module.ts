import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmTransactionComponent } from './alarm-transaction/alarm-transaction.component';
import { DamageProductComponent } from './damage-product/damage-product.component';
import { OverallTransactionComponent } from './overall-transaction/overall-transaction.component';
import { ProductLifeCycleComponent } from './product-life-cycle/product-life-cycle.component';

const routes: Routes = [{
  path: 'alarm-transaction',
  component: AlarmTransactionComponent
}, {
  path: 'damage-product',
  component: DamageProductComponent
}, {
  path: 'overall-transaction',
  component: OverallTransactionComponent
}, {
  path: 'product-life-cycle',
  component: ProductLifeCycleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
