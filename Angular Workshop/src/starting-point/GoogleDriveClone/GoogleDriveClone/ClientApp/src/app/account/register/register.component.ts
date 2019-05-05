import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "../../shared/models/register.model";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.sass"]
})
export class RegisterComponent implements OnInit {
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {}

  onSubmit(formValue: NgForm) {
    let registerModel: RegisterModel = {
      UserName: formValue.value.UserName,
      Password: formValue.value.Password
    };

    console.log(registerModel);
    return this.http
      .post("/Account/Register", registerModel, { observe: "response" })
      .subscribe(
        res => this.toastr.success("Create account success"),
        error => this.toastr.error("Something went wrong")
      );
  }
}
