import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Priority, Task } from '../first/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit , OnChanges {

  @Input("default") tasksList: Task[] = []
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("this.tasksList")
    
  }

  get PriorityValueStatic(){
    return Priority
  }
  ngOnInit(): void {

    console.log(this.tasksList);
  }

}
