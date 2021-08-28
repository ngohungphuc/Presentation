import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimePipe } from "./shared/pipes/time.pipe";

@NgModule({
  declarations: [TimePipe],
  imports: [CommonModule],
  exports: [TimePipe],
  providers: []
})
export class SharedModule {}
