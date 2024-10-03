import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Priority, Task } from '../first/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private sr:ProductService,private route:ActivatedRoute) {
    
   }
  products:Task[]=[]
  ngOnInit(): void {
    console.log(this.sr.getTasks())
    
  }


  add(){
    let task={id: 4, description: 'fix the UI',completed: false, priority: Priority.Low }
    this.sr.addTask(task)
    console.log(this.sr.getTasks())
  }

}
