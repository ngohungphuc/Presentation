import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

import { AccountModel } from "../../core/models/register.model";
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService, private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmit(formValue: NgForm) {
    const registerModel: AccountModel = {
      UserName: formValue.value.UserName,
      Password: formValue.value.Password
    };

    return this.authService
      .register(registerModel)
      .subscribe(
        res => this.toastr.success("Create account success"),
        error => this.toastr.error("Something went wrong")
      );
  }
}
