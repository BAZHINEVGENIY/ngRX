import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import {TodoPageComponent} from './page/todo-page/todo-page.component';
// import * as path from "path";
import {todoRoutes} from "./todoRoutes";
import {TodoWidgetComponent} from './widget/todo-widget/todo-widget.component';
import {TodoFormUiComponent} from './UI/todo-form-ui/todo-form-ui.component';
import {FormsModule} from "@angular/forms";
import {TodoListUiComponent} from './UI/todo-list-ui/todo-list-ui.component';
import {RouterModule} from "@angular/router";
import { TodoListItemEditComponent } from './UI/todo-list-item-edit/todo-list-item-edit.component';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoFormUiComponent,
    TodoListUiComponent,
    TodoListItemEditComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    FormsModule
  ]
})
export class TodoModule {
}
