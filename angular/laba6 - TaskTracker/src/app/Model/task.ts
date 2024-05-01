export class Task {
  Number: number = -1; //req
  Type: string | undefined | null; //(bug или task) req 
  Priority: string | undefined | null; //(critical/high/medium/low)
  Status: string | undefined | null; //(не начато/в процессе/выполнено) req
  Title: string | undefined | null; //req
  Description: string | undefined | null;
  Assignee: string | undefined | null;
  Creator: string | undefined | null; //req
  CreatedAt: Date | undefined | null; //req
  UpdatedAt: Date | undefined | null; //req

  constructor (init?:Partial<Task>) {
    Object.assign(this, init);
  }

}
