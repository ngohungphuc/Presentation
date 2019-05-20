import { Component, OnInit } from "@angular/core";
import { AuthHttpService } from "../../core/services/auth.http.service";

@Component({
  selector: "portal-index",
  templateUrl: "index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor(private authHttpService: AuthHttpService) {}
  ngOnInit() {
    this.authHttpService
      .get("api/asset/GetAll")
      .subscribe(res => console.log(res));
  }
}
