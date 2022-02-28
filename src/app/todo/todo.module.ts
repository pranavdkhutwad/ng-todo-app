import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoTaskComponent } from './components/todo-task/todo-task.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './services/todo.service';
import { HeaderComponent } from '../components/header/header.component';
@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoTaskComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [TodoService],
  exports: [TodoComponent],
})
export class TodoModule {}
