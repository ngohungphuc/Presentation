import { Component, OnInit } from "@angular/core";
import { AuthHttpService } from "../../core/services/auth.http.service";
import { IAssets } from "../shared/assets.model";
import { Observable } from "rxjs";

@Component({
  selector: "portal-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public assets: Observable<IAssets[]>;
  constructor(private authHttpService: AuthHttpService) {}
  ngOnInit() {
    this.assets = this.authHttpService.get("api/asset/GetAll");
  }

  getData(data) {
    console.log(data);
  }
}
