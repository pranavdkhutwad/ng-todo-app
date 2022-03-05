import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task: Task = {
    name: '',
    desc: '',
    priority: null,
  };

  constructor(private todoService: TodoService) {}
  @Output() taskEvent: EventEmitter<any> = new EventEmitter<any>();

  addTask() {
    this.todoService.addTodoTask(this.task).subscribe(() => {
      this.todoService.getTodos().subscribe((data) => {
        const todosList = this.todoService.transformTodos(data);

        this.taskEvent.emit(todosList);
      });
    });
  }
}
