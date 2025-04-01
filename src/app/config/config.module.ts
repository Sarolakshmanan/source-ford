import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigRoutingModule } from './config-routing.module';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { EmailConfigComponent } from './email-config/email-config.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { LocationConfigComponent } from './location-config/location-config.component';
import { InventoryConfigComponent } from './inventory-config/inventory-config.component';
import { MachineListingComponent } from './machine-listing/machine-listing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LastItemComponent } from './last-item/last-item.component';
import { ReturnDamagedProductComponent } from './return-damaged-product/return-damaged-product.component';


@NgModule({
  declarations: [CategoryConfigComponent, EmailConfigComponent, LocationConfigComponent, InventoryConfigComponent, MachineListingComponent, LastItemComponent, ReturnDamagedProductComponent],
  imports: [CommonModule,ConfigRoutingModule,SharedComponentModule,FormsModule,ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ConfigModule { }
