import { Component } from '@angular/core';
import {Todo} from '../todos/todo';
import {TodoService} from '../todos/todo.service';

@Component({
	//moduleId: module.id,
	selector: 'todo-app',
	templateUrl: 'app/todo-app/todo-app.component.html',
	
	styleUrls: ['app/todo-app/todo-app.component.css'],
	providers: [TodoService]
})
export class TodoAppComponent {
	newTodo: Todo = new Todo();

	constructor(private todoService: TodoService) {
	}

	addTodo() {
		this.todoService.addTodo(this.newTodo);
		this.newTodo = new Todo();
	}
	toggleTodoComplete(todo) {
		this.todoService.toggleTodoComplete(todo);
	}
	removeTodo(todo) {
		this.todoService.deleteTodoById(todo.id);
	}
	get todos() {
		return this.todoService.getAllTodos();
	}
}