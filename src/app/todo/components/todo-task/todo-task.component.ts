import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent {
  @Input() taskItem: any;
  constructor(private todoService: TodoService) {}
  getCardBorder() {
    return this.todoService.getCardBorder(this.taskItem.priority);
  }
}
