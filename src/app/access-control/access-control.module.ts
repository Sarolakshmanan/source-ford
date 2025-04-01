import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoleComponent, UserComponent],
  imports: [
    CommonModule,
    SharedComponentModule,
    AccessControlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SharedComponentModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccessControlModule {}
