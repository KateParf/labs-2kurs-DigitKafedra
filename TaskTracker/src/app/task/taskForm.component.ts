import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../Model/task';
import { Tasks } from '../Model/tasks.db';

@Component({
  selector: 'taskForm',
  templateUrl: './taskForm.component.html'
})
export class TaskFormComponent implements OnInit {

  id: number = 0;
  task?: Task;

  constructor(private router: Router, private route: ActivatedRoute, private tasks:Tasks) { }

  form = new FormGroup({
    taskType: new FormControl('', Validators.required),
    taskPriority: new FormControl(''),
    taskStatus: new FormControl('', Validators.required),
    taskTitle: new FormControl('', Validators.required),
    taskDescription: new FormControl(''),
    taskAssignee:  new FormControl('', Validators.pattern(/^([A-ZА-Я]{1}[a-zа-я]+\s*){1,3}$/)),
    taskCreator: new FormControl('', [Validators.required, Validators.pattern(/^([A-ZА-Я]{1}[a-zа-я]+\s*){1,3}$/)]),
  });


  saveTask() {
    let newTask = new Task();
    let data = this.form.getRawValue();

    newTask.id = this.id;
    newTask.Type = data.taskType;
    newTask.Priority = data.taskPriority;
    newTask.Status = data.taskStatus;
    newTask.Title = data.taskTitle;
    newTask.Description = data.taskDescription;
    newTask.Assignee = data.taskAssignee;
    newTask.Creator = data.taskCreator;

    newTask.CreatedAt = this.task?.CreatedAt;

    console.log("saving task:", newTask);
    //!!const tasks = Tasks.getInstance();

    if (this.id == 0)
      this.tasks.addTask(newTask);
    else
    this.tasks.editTask(newTask);

    // переход к списку
    this.router.navigate(["/tasks"]);
  }

  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      console.log('The id of this route is: ', params['id']);
      
      this.id = params['id'];

      //!!const tasks = Tasks.getInstance();
      this.task = await this.tasks.getTask(this.id);
      console.log("get task: ", this.task);

      this.form.patchValue({
        taskType: this.task?.Type,
        taskPriority: this.task?.Priority,
        taskStatus: this.task?.Status,
        taskTitle: this.task?.Title,
        taskDescription: this.task?.Description,
        taskAssignee: this.task?.Assignee,
        taskCreator: this.task?.Creator,
      });
    });
  }

}
