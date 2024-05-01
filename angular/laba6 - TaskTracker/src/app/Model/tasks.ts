import { Task } from "./task";

export class Tasks {
  private tasks: Task[] = [];

  public addTask(task: Task) {
    task.Number = this.getNextTaskId();
    task.CreatedAt = new Date();
    task.UpdatedAt = new Date();

    this.tasks.push(task);
    console.log("Task add", this.tasks);
  }

  public editTask(task: Task) {
    const num = this.tasks.findIndex(t => t.Number == task.Number);
    
    task.UpdatedAt = new Date();

    this.tasks[num] = task;
    console.log("Task.edit", this.tasks);
  }

  public getTasks() {
    return this.tasks;
  }

  public getTask(num: number) {
    const task = this.tasks.find(t => t.Number == num);
    return task;
  }

  private getNextTaskId(): number {
    const last = this.tasks[this.tasks.length - 1];
    const num = last ? last.Number + 1 : 1;
    return num;
  }

  //----

  private fillDefault() {
    this.addTask(new Task({
      Title: "Сходить за молоком",
      Status: "В процессе",
      Creator: "Иванов Иван",
      Type: "Таск",
    }) );

    this.addTask(new Task({
      Title: "Сделать уроки",
      Status: "Новая",
      Creator: "Иванов Иван",
      Type: "Таск",
    }) );

    this.addTask(new Task({
      Title: "Погулять",
      Status: "Сделано",
      Creator: "Иванов Иван",
      Type: "Таск",
    }) );
  }

  //----

  private static _instance?: Tasks;

  public static getInstance(): Tasks {
    if (! Tasks._instance) {
      Tasks._instance = new Tasks();
      Tasks._instance.fillDefault();
    }
    return Tasks._instance;
  }
}
