import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { OverallTransactionComponent } from './overall-transaction/overall-transaction.component';
import { AlarmTransactionComponent } from './alarm-transaction/alarm-transaction.component';
import { DamageProductComponent } from './damage-product/damage-product.component';
import { ProductLifeCycleComponent } from './product-life-cycle/product-life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from '../shared-component/shared-component.module';


@NgModule({
  declarations: [
    OverallTransactionComponent,
    AlarmTransactionComponent,
    DamageProductComponent,
    ProductLifeCycleComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReportsModule { }
