import { Component, OnInit } from '@angular/core';
import { Priority, Task } from './task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

  constructor(private route:ActivatedRoute){
    console.log(this.route.snapshot.queryParamMap.get('param1'))
  }

  title="kjhg"
  tasks: Task[] = [];

  ngOnInit(): void {
    console.log("je suis bnOnInit");
    
  }


    onKey(caractere:any){
      console.log(caractere.key)
    }
  

}
