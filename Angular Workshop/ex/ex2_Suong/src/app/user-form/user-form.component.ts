import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  private _userToEdit: any;
  @Input() set userToEdit(value: any){
    this._userToEdit = value;
  }

  get userToEdit(){
    return this._userToEdit;
  }

  private _clickToEdit: boolean;
  @Input() set clickToEdit(value: boolean){
    this._clickToEdit = value;
  }

  get clickToEdit(){
    return this._clickToEdit;
  }
  @Output() emitUser = new EventEmitter();

  ngOnInit() {
    console.log(this._userToEdit);
  }

  HandleSubmit(formValue: any){
    // Emit the user data to its parent
    this.emitUser.emit(formValue);
  }
  SwitchToAdd(){
    this._clickToEdit = false;
  }
}
