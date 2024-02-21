import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TasksService {
  tasks: { title: string; description: string; status: string }[] = [
    {
      title: 'Task 1',
      description: 'Study',
      status: 'To Do',
    },
    {
      title: 'Task 2',
      description: 'Playing',
      status: 'In Progress',
    },
    {
      title: 'Task 3',
      description: 'Cooking',
      status: 'Done',
    },
  ];
  statusUpdated = new EventEmitter<string>();

  constructor() {}
}
