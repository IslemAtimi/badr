import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Priority, Task } from '../first/task';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.css']
})
export class TaskCreatorComponent implements OnInit {

  @Output() onTaskCreated = new EventEmitter<Task>()
  title = 'TaskManager';
  select_priority=Priority.Low;
  constructor() { }

  ngOnInit(): void {
  }
  newTask: Task = {
    id: 0,
    description: "this is a description",
    completed: false,
    priority: Priority.Low
  };
  addTask()
  {
    
    this.onTaskCreated.emit(this.newTask);
  }
}
