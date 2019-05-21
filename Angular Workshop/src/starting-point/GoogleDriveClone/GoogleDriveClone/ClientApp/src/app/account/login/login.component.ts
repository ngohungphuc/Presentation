import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { of } from "rxjs/internal/observable/of";

import { AuthService } from "../../core/services/auth.service";
import { LoginModel } from "../../core/models/login-model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get UserName() {
    return this.loginForm.get("UserName");
  }

  get Password() {
    return this.loginForm.get("Password");
  }

  ngOnInit() {
    this.buildForm();
  }

  public onSubmit() {
    const loginModel: LoginModel = {
      username: this.loginForm.value.UserName,
      password: this.loginForm.value.Password
    };

    this.authService.login(loginModel).subscribe(
      res => {
        this.router.navigate(["portal"]);
      },
      err => console.error(err)
    );
  }

  public resetForm() {
    this.loginForm.reset();
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      UserName: ["", Validators.required, this.noWhitespaceValidator],
      Password: ["", Validators.required, this.noWhitespaceValidator]
    });
  }

  private noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || "").trim().length === 0;
    const isValid = !isWhitespace;
    return of(isValid ? null : { whitespace: true });
  }
}
