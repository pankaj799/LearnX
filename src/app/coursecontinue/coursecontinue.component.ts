import { Component, OnInit } from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-coursecontinue',
  templateUrl: './coursecontinue.component.html',
  styleUrls: ['./coursecontinue.component.css']
})
export class CoursecontinueComponent implements OnInit {
  value1 = true;
  value2 = false;
  value3 = false;
  value4 = false;
  value5 = false;
  value6 = false;
  fun1(){
    this.value1=true;
    this.value2=false;
  }
  fun2(){
    this.value2=true;
    this.value1=false;
  }
  fun3(){
    this.value3=true;
  }
  fun4(){
    this.value4=true;
  }
  fun5(){
    this.value5=true;
  }
  fun6(){
    this.value6=true;
  }
  constructor() { }

  ngOnInit() {
  }

}
