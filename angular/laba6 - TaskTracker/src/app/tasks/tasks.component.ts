import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from "@angular/common";
import { Task } from '../Model/task';
import { Tasks } from '../Model/tasks';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent {

  constructor(private router: Router) { }

  tasks = Tasks.getInstance();
  tasksArr = this.tasks.getTasks();

  onDelete(task: Task) {
    // todo confirm
    const taskIndex = this.tasksArr.findIndex(t => t.Number === task.Number);
    console.log(taskIndex);
    this.tasksArr.splice(taskIndex, 1);
  }

  onUpdate(task: Task) {
    task.UpdatedAt = new Date();
    const taskIndex = this.tasksArr.findIndex(t => t.Number === task.Number);
    this.tasksArr[taskIndex] = task;
  }

}

