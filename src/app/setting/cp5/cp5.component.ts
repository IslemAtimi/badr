import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cp5',
  templateUrl: './cp5.component.html',
  styleUrls: ['./cp5.component.css']
})
export class Cp5Component implements OnInit {

  constructor() { }

  user={
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    PasswordConfirmation : ""
  }
  ngOnInit(): void {
  }


  send(){
    console.log(this.user)
  }

}
