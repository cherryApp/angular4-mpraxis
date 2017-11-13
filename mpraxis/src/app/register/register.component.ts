import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register = {
    name: "Dani",
    bdate: "1989-05-31"
  };

  constructor() { }

  ngOnInit() {
  }

  submitData() {
    console.log(this.register);
  }

}
