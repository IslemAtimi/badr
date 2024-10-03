import { Injectable } from '@angular/core';
import { Priority, Task } from '../first/task';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  

  private Data:Task[]=[
    { id: 1, description: 'fix bug', completed: false, priority: Priority.High },
    { id: 2, description: 'set up unit tests', completed: false, priority: Priority.Normal},
    { id: 3, description: 'fix the UI',completed: false, priority: Priority.Low }
  ]

  constructor(private http:HttpClient) {}

  url='https://dummyjson.com/products'

  getProducts():Observable<any>{
    return this.http.get<any>(this.url)
  }


  getTasks(){
    return this.Data
  }

  addTask(task:Task){
    this.Data.push(task)
  }


}
