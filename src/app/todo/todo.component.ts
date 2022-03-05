import { Component, OnInit } from '@angular/core';
import { Task } from './interfaces/todo.interface';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  highPriorityTask: Task[] = [];
  mediumPriorityTask: Task[] = [];
  lowPriorityTask: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      const todosList = this.todoService.transformTodos(data);
      const obj = this.todoService.filterByCategories(todosList);
      this.updateTasks(obj);
    });
  }
  updateTasks(todosCategories: any) {
    this.highPriorityTask = todosCategories.highPriorities;
    this.mediumPriorityTask = todosCategories.mediumPriorities;
    this.lowPriorityTask = todosCategories.lowPriorities;
  }
  handleTaskEvent(todosList: any) {
    const obj = this.todoService.filterByCategories(todosList);
    this.updateTasks(obj);
  }
}
