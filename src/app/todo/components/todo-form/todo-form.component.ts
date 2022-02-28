import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
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

  @Output() taskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  addTask() {
    this.taskEvent.emit(this.task);
  }
}
