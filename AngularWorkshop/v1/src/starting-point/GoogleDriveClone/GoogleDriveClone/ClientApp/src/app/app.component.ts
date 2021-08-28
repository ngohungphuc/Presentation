import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthStateModel } from "./core/models/auth-state-model";
import { AuthService } from "./core/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  authState$: Observable<AuthStateModel>;

  constructor(private authService: AuthService) {}

  refreshToken() {
    this.authService.refreshTokens().subscribe();
  }

  ngOnInit(): void {
    console.log(navigator.language);
    this.authState$ = this.authService.state$;
    // This starts up the token refresh preocess for the app
    this.authService.init().subscribe(
      () => {
        console.info("Startup success");
      },
      error => console.warn(error)
    );
  }
}
