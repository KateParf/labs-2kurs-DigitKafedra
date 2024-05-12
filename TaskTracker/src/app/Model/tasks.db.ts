// реализация хранения тасков в ИндексДБ
import { Injectable, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { dbConfig, tasksTableName } from "./dbConfig";
import { Task } from "./task";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class Tasks {

  constructor(private dbService: NgxIndexedDBService) {
    console.log("TASKS service created");
  }


  public async addTask(task: Task) {
    delete task['id']; //!!
    task.CreatedAt = new Date();
    task.UpdatedAt = new Date();

    //!!this.tasks.push(task);
    this.dbService
      .add(tasksTableName, task)
      .subscribe((key) => {
        console.log('Task added. key: ', key);
      });
  }

  public editTask(task: Task) {
    /*const num = this.tasks.findIndex(t => t.id == task.id);
    this.tasks[num] = task;
    console.log("Task.edit", this.tasks);*/
    task.id = Number(task.id);
    task.UpdatedAt = new Date();
    this.dbService
      .update(tasksTableName, task)
      .subscribe((storeData) => {
        console.log('storeData: ', storeData);
      });
  }

  public deleteTask(taskNumber: number) {
    /*const idx = this.tasks.findIndex(t => t.id === taskNumber);
    console.log(idx);
    this.tasks.splice(idx, 1);*/

    this.dbService.deleteByKey(tasksTableName, Number(taskNumber)).subscribe((status) => {
      console.log('Deleted?:', status);
    });
  }

  public async getTasks(Priority: string | null = "", Type: string | null = "", Status: string | null = ""): Promise<Task[]> {
    let allTasks: Task[] = [];
    await this.dbService.getAll<Task>(tasksTableName).forEach(t => { allTasks = allTasks.concat(t); });

    let tasks: Task[] = [];
    for (let i = 0; i < allTasks.length; i++) {
      const task = allTasks[i] as Task;
      if (Priority === "" || task.Priority == Priority)
        if (Type === "" || task.Type == Type)
          if (Status === "" || task.Status == Status)
            tasks.push(task);
    }

    //console.log("getTasks", tasks);
    return tasks;
  }

  public async getTask(num: number): Promise<Task> {
    //const task = this.tasks.find(t => t.id == num);
    let task = new Task();
    await this.dbService.getByKey(tasksTableName, Number(num)).forEach(t => {
      task = t as Task;
    });
    return task;
  }
 

  //----

  // заполняет базу дефолтными значниями
  public async init() {
    console.log('fillDefault begin');

    // сначала чистим
    this.dbService.clear(tasksTableName).subscribe((successDeleted) => {
      console.log('fillDefault clear. success: ', successDeleted);
    });

    // добавлем задачи в базу
    this.addTask(new Task({
      Title: "Сходить за молоком",
      Status: "В процессе",
      Creator: "Иванов Иван",
      Type: "Таск",
    }));

    this.addTask(new Task({
      Title: "Сделать уроки",
      Status: "Не начато",
      Creator: "Иванов Иван",
      Type: "Таск",
    }));

    this.addTask(new Task({
      Title: "Погулять",
      Status: "Выполнено",
      Creator: "Иванов Иван",
      Type: "Таск",
    }));
  }

}
