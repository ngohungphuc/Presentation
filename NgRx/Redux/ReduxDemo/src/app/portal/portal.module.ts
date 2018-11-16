import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalComponent } from './portal.component';
import { PortalRouting } from './portal.routing';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/portal.reducers';

@NgModule({
  imports: [
    CommonModule,
    PortalRouting,
    StoreModule.forFeature('portalModule', reducer),
  ],
  declarations: [PortalComponent],
  exports: [],
  providers: []
})
export class PortalModule {}
