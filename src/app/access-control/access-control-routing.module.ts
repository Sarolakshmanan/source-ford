import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { RoleComponent } from "./role/role.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", redirectTo: "user-details", pathMatch: "full" },
      {
        path: "user-details",
        component: UserComponent,
        data: { view: "private" },
      },
      {
        path: "role-config",
        component: RoleComponent,
        data: { view: "private" },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessControlRoutingModule {}
