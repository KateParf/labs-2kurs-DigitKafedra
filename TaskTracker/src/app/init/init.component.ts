import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from "@angular/common";
import { Task } from '../Model/task';
import { Tasks } from '../Model/tasks.db';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'init',
  templateUrl: './init.component.html'
})

export class InitComponent {
  //!!tasks = Tasks.getInstance();
  tasksArr: Task[];

  constructor(private router: Router, private tasks:Tasks) { 
    this.tasksArr = [];
    tasks.init();
  }

}

