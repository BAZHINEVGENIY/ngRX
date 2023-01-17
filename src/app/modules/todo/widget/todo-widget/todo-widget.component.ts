import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {TodoCreateAction, TodoDeleteAction} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent {

  todoList$: Observable<any> = this.store$.pipe(select(todoListSelector))

  constructor(private store$: Store<TodoState>) {}

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({name}))
  }
  onDelete (id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}))
  }
}
