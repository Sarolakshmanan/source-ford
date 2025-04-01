import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { OtpConfigComponent } from "./otp-config/otp-config.component";
import { OrderDashboardComponent } from "./order-dashboard/order-dashboard.component";
import { ReturnProductsComponent } from "./return-products/return-products.component";
import { LandingScreenComponent } from "./landing-screen/landing-screen.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "peoples-dashboard", pathMatch: "full" },
      { path: "login", component: LoginComponent, data: { view: "public" } },
      { path: "return-product", component: ReturnProductsComponent, data: { view: "public" } },
      { path: "landing-screen", component: LandingScreenComponent, data: { view: "public" } },
      {
        path: "peoples-dashboard",
        component: OrderDashboardComponent,
        data: { view: "public" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitalActivityRoutingModule {}
