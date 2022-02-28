import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() highPriorityList?: Task[];
  @Input() mediumPriorityList?: Task[];
  @Input() lowPriorityList?: Task[];
}
