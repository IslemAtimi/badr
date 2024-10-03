import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp2',
  templateUrl: './cp2.component.html',
  styleUrls: ['./cp2.component.css']
})
export class Cp2Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goTo(){
    this.route.navigate(['/cp',3])
  }

  goToCp3(){
    this.route.navigate(['/cp3'],{queryParams:{'id':3,name:'angular'}})
  }

}
