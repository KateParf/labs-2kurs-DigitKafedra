import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from "@angular/common";
import { Task } from '../Model/task';
//import { Tasks } from '../Model/tasks.array';
import { Tasks } from '../Model/tasks.db';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})

export class TasksComponent {
  //!!tasks = Tasks.getInstance();
  tasksArr: Task[];

  constructor(private router: Router, private tasks:Tasks) { 
    this.tasksArr = [];
    this.submitFilter();
  }

  onDelete(task: Task) {
    // todo confirm
    this.tasks.deleteTask(Number(task.id));
    this.submitFilter(); // обновляем список после удал
  }

  filter = new FormGroup({
    taskType: new FormControl(""),
    taskPriority: new FormControl(""),
    taskStatus: new FormControl(""),
  });

  async submitFilter() {
    let data = this.filter.getRawValue();
    console.log("filter", data);

    this.tasksArr = await this.tasks.getTasks(data.taskPriority, data.taskType, data.taskStatus);
  }
}

