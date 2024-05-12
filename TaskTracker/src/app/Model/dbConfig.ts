import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

export const tasksTableName: string = 'tasks';

export const dbConfig: DBConfig = {
  name: 'TasksDb',
  version: 1,
  objectStoresMeta: [{
    store: tasksTableName,
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'Type', keypath: 'Type', options: { unique: false } }, // string
      { name: 'Priority', keypath: 'Priority', options: { unique: false } }, // string
      { name: 'Status', keypath: 'Status', options: { unique: false } }, // string
      { name: 'Title', keypath: 'Title', options: { unique: false } }, // string
      { name: 'Description', keypath: 'Description', options: { unique: false } }, // string
      { name: 'Assignee', keypath: 'Assignee', options: { unique: false } }, // string
      { name: 'Creator', keypath: 'Creator', options: { unique: false } }, // string
      { name: 'CreatedAt', keypath: 'CreatedAt', options: { unique: false } }, // Date
      { name: 'UpdatedAt', keypath: 'UpdatedAt', options: { unique: false } } // Date
    ]
  }]
};