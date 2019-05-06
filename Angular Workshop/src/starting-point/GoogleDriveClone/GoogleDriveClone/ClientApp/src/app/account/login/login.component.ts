import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { of } from "rxjs/internal/observable/of";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

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
    console.warn(this.loginForm.value);
  }

  //TODO: reset form value 
  public resetForm(){

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
