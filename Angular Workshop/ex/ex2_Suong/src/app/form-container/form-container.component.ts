import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  checkLocalStorage: boolean;

  // Data
  Users: Array<any> = [];

  // Data pass to child
  userToEdit: any;
  userChosen: boolean;
  constructor() { }
  ngOnInit() {
    this.CheckLocalStorage();
  }

  // Received from child
  SignUp(dataReceived: any){
    this.Users.push(dataReceived);
    // save to local storage
    localStorage.setItem('users',JSON.stringify(this.Users));
  }

  // Edit User
  PickUser(user: any){
    // console.log(user);
    this.userToEdit = user;
    this.userChosen = true;
  }

  // Check Local storage
  CheckLocalStorage(){
    const checkLocalStorage = localStorage.getItem('users');
    if(checkLocalStorage != null || checkLocalStorage != undefined){
      this.Users = JSON.parse(checkLocalStorage);
    }else{
      this.Users.length = 0;
    }
  }
}
