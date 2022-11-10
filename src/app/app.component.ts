import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  taskName: string = '';
  config: { [key: string] : string } | null = null;
  tasks: Task[] = [{
    name: 'Siłownia',
    deadLine: '2022-12-12',
    done: false
  },
{
  name: 'Nauka Angulara',
  deadLine: '2022-12-26',
  done: false
},
{
  name: 'Sprzątanie domu',
  deadLine: '2023-0112',
  done: false
}];

  constructor(){
    this.config = {
      title: 'Lista zadań',
      footer: `© Anna's Kiedel ToDoApp.`,
      date: new Date().toDateString()
    };
  }
  clearTasks() {
    this.tasks = [];
  }
  onKeyUp(event : KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }
  createTask(){
    const task: Task = {
      name: this.taskName,
      deadLine: '2022-11-25',
      done: false,
    };
    this.tasks.push(task);

  }
}
