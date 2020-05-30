import { Component, OnInit } from '@angular/core';
import { buttontoggle } from './../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [buttontoggle]
})
export class LoginComponent implements OnInit {
  visible1= true;
  visible2= false;


  togglediv1(){
    this.visible1= true;
    this.visible2= false;
  }
  togglediv2(){
    this.visible2= true;
    this.visible1= false;
  }
  onSubmit(){
    console.log("Submitted!");
  }
  constructor() { }

  ngOnInit() {
  }

}
