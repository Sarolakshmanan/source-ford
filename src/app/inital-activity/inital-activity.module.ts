import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InitalActivityRoutingModule } from "./inital-activity-routing.module";
import { SharedComponentModule } from "../shared-component/shared-component.module";
import { LoginComponent } from "./login/login.component";
import { OtpConfigComponent } from "./otp-config/otp-config.component";
import { RegisterComponent } from "./register/register.component";
import { OrderDashboardComponent } from "./order-dashboard/order-dashboard.component";
import { PlaceOrderComponent } from "./place-order/place-order.component";
import { CategoriesComponent } from "./categories/categories.component";
import { ReturnProductsComponent } from './return-products/return-products.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

@NgModule({
  declarations: [
    LoginComponent,
    OtpConfigComponent,
    RegisterComponent,
    PlaceOrderComponent,
    OrderDashboardComponent,
    CategoriesComponent,
    ReturnProductsComponent,
    LandingScreenComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    InitalActivityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SharedComponentModule],
})
export class InitalActivityModule {}
