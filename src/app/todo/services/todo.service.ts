import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  transformTodos(obj: any) {
    const arr = [];
    for (let key in obj) {
      const task = { ...obj[key], id: key };
      arr.push(task);
    }

    return arr;
  }

  filterByCategories(list: any) {
    const highPriorities = list.filter((task: any) => task.priority === 1);
    const mediumPriorities = list.filter((task: any) => task.priority === 2);
    const lowPriorities = list.filter((task: any) => task.priority === 3);

    return {
      highPriorities,
      mediumPriorities,
      lowPriorities,
    };
  }

  addTodoTask(task: Task) {
    return this.http.post(
      'https://todos-49460-default-rtdb.firebaseio.com/todos.json',
      task
    );
  }

  getTodos() {
    return this.http.get(
      'https://todos-49460-default-rtdb.firebaseio.com/todos.json'
    );
  }

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
