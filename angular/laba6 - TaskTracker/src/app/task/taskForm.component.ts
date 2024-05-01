import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Task } from '../Model/task';
import { Tasks } from '../Model/tasks';

@Component({
  selector: 'taskForm',
  templateUrl: './taskForm.component.html'
})
export class TaskFormComponent implements OnInit {

  id: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

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

    newTask.Number = this.id;
    newTask.Type = data.taskType;
    newTask.Priority = data.taskPriority;
    newTask.Status = data.taskStatus;
    newTask.Title = data.taskTitle;
    newTask.Description = data.taskDescription;
    newTask.Assignee = data.taskAssignee;
    newTask.Creator = data.taskCreator;

    console.log("saving task:", newTask);
    const tasks = Tasks.getInstance();

    if (this.id == 0)
      tasks.addTask(newTask);
    else
      tasks.editTask(newTask);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      
      this.id = params['id'];

      const tasks = Tasks.getInstance();
      const task = tasks.getTask(this.id);
      console.log(task);
      this.form.patchValue({
        taskType: task?.Type,
        taskPriority: task?.Priority,
        taskStatus: task?.Status,
        taskTitle: task?.Title,
        taskDescription: task?.Description,
        taskAssignee: task?.Assignee,
        taskCreator: task?.Creator,
      });
    });
  }

}
