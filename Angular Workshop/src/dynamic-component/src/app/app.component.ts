import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef
} from "@angular/core";
import { AlertComponent } from "./alert/alert.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<AlertComponent>;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type) {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);

    this.componentRef.instance.type = type;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
