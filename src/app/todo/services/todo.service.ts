import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodoTask(task: Task) {}
  getCardBorder(priority: number): string {
    switch (priority) {
      case 1: {
        return 'border-danger';
      }
      case 2: {
        return 'border-warning';
      }
      case 3: {
        return 'border-info';
      }
      default: {
        return '';
      }
    }
  }
}
