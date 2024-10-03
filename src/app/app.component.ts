import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Priority, Task } from './first/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


Id=5
tasks: Task[] = [];
color = "blue"
Create(task:Task){
  this.tasks.push(task)
  console.log(this.tasks)
}
// addTask(id:number, description:string, completed:boolean, priority:Priority) {
//   let task:Task={id:id,description:description,completed:completed,priority:priority}
//   this.tasks.push(task);
//   console.log(this.tasks)
// }

// ajouterTask(task:Task) {

//   console.log(task,"llllllllllllll")
//   this.tasks.push(task)
// }



// constructor() { 
//   console.log('je suis constructor');
// }
// ngOnInit(): void {
//   console.log('je suis OnInit');
 
// }
// ngDoCheck(): void {
//   console.log('je suis DoCheck 2');
// }
// ngOnChanges(changes: SimpleChanges): void {
//   console.log('je suis OnChanges');
// }


}
