import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {
  editIds: number[] = [];

  @Input()
  todoList: Todo[] = [];

  @Output()
  delete = new EventEmitter<number>()

  @Output()
  toggle = new EventEmitter<number>()

  @Output()
  edit = new EventEmitter<{ id: number, name: string }>()

  @Output()
  editMode = new EventEmitter<void>()

  constructor() {
  }

  onDelete(id: number) {
    this.delete.emit(id)
  }

  onToggle(event: Event, id: number) {
    event.preventDefault()
    this.toggle.emit(id)
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter(item => item !== id)
    this.edit.emit({id, name})
  }

  onChangeEdit(id: number){
    this.editIds.push(id)
  }

  ngOnInit() {
  }
}
