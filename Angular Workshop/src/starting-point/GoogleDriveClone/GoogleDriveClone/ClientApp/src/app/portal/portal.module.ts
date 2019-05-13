import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { portalRoutes } from "./portal.routing";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, RouterModule.forChild(portalRoutes)],
  exports: [],
  providers: []
})
export class PortalModule {}
