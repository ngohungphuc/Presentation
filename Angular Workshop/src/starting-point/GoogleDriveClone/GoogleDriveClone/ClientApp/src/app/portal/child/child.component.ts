import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IAssets } from "../shared/assets.model";

@Component({
  selector: "index-child",
  templateUrl: "child.component.html"
})
export class ChildComponent implements OnInit {
  @Input() assets: IAssets[];
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {}

  SendData(data: string) {
    this.event.emit(data);
  }
}
