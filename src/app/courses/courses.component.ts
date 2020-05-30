import { Component, OnInit } from '@angular/core';
import { buttontoggle1 } from './../animations';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  animations: [ buttontoggle1 ]
})
export class CoursesComponent implements OnInit {
  visible1= true;
  visible2= false;
  visible3= false;

  togglediv1(){
    this.visible1= true;
    this.visible2=false;
    this.visible3=false;
  }
  togglediv2(){
    this.visible2= true;
    this.visible1= false;
    this.visible3= false;
  }
  togglediv3(){
    this.visible3= true;
    this.visible2= false;
    this.visible1= false;
  }
  constructor() { }

  ngOnInit() {
  }

}
