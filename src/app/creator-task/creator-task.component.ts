import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority, Task } from '../first/task';

@Component({
  selector: 'app-creator-task',
  templateUrl: './creator-task.component.html',
  styleUrls: ['./creator-task.component.css']
})
export class CreatorTaskComponent  {

  @Input() Id: number=0
  @Output() onTaskCreated = new EventEmitter<Task>()
  ngDoCheck(): void {
    console.log('je suis DoCheck 2');
  }
  addTask(): void {
    let obj={...this.newTask}
    this.onTaskCreated.emit(obj)
    }

    ngOnInit(): void {
      this.newTask.id=this.Id
    }

  
  newTask: Task = {
    id: this.Id,
    description: "",
    completed: false,
    priority: Priority.Normal
    };

  low = {
    value: Priority.Low,
    label: "Low"
    };
    normal = {
    value: Priority.Normal,
    label: "Normal"
    }
    high = {
    value: Priority.High,
    label: "High"
    }
}
