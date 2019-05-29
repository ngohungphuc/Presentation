import { Component, OnInit } from "@angular/core";
import { AuthHttpService } from "../../core/services/auth.http.service";
import { IAssets } from "../shared/assets.model";

@Component({
  selector: "portal-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  public assets: IAssets[];
  constructor(private authHttpService: AuthHttpService) {}
  ngOnInit() {
    this.authHttpService.get("api/asset/GetAll").subscribe(res => {
      console.log(res);
      this.assets = res;
    });
  }

  getData(data) {
    console.log(data);
  }
}
