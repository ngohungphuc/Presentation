import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { OnDestroy } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  //represents a container where one or more views can be attached
  @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  componentRef: ComponentRef<AlertComponent>;
  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type) {
    //Clear the container.
    this.container.clear();
    //Create a factory for component.
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    //Create a component using the factory
    this.componentRef = this.container.createComponent(factory);
    //Pass the value for @Input properties using a component reference instance method.
    this.componentRef.instance.type = type;
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
