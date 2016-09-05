import { Component } from '@angular/core';
import {TodoAppComponent} from './todo-app/todo-app.component';

@Component({
    selector: 'roca-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
	directives: [TodoAppComponent]
})
export class AppComponent {
    pageTitle: string = 'OlgaCarpenter';
}