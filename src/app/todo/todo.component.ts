import { Component } from '@angular/core';
import { Task } from './interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  highPriorityTask: Task[] = [];
  mediumPriorityTask: Task[] = [];
  lowPriorityTask: Task[] = [];

  handleTaskEvent(task: Task) {
    switch (task.priority) {
      case 1: {
        this.highPriorityTask = [...this.highPriorityTask, { ...task }];
        break;
      }
      case 2: {
        this.mediumPriorityTask = [...this.mediumPriorityTask, { ...task }];
        break;
      }
      case 3: {
        this.lowPriorityTask = [...this.lowPriorityTask, { ...task }];
        break;
      }
    }
  }
}
