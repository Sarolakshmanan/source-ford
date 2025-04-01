import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfigComponent } from './email-config/email-config.component';
import { CategoryConfigComponent } from './category-config/category-config.component';
import { InventoryConfigComponent } from './inventory-config/inventory-config.component';
import { LocationConfigComponent } from './location-config/location-config.component';
import { MachineListingComponent } from './machine-listing/machine-listing.component';
import { LastItemComponent } from './last-item/last-item.component';
import { ReturnDamagedProductComponent } from './return-damaged-product/return-damaged-product.component';

const routes: Routes = [
  {
    path: 'email-config',
    component: EmailConfigComponent,
  },
  {
    path: 'category-config',
    component: CategoryConfigComponent,
  },
  {
    path: 'inventory-config',
    component: InventoryConfigComponent,
  },
  {
    path: 'location-config',
    component: LocationConfigComponent,
  },
  {
    path: 'machine-listing',
    component: MachineListingComponent,
  },
  {
    path: 'raise-last-item',
    component: LastItemComponent,
  },
  {
    path: 'return-damaged-product',
    component: ReturnDamagedProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigRoutingModule {}
