import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrls: ['./todo-list-item-edit.component.css']
})
export class TodoListItemEditComponent implements OnInit{
  name = ''

  @Input()
  todo: any

  @Output()
  edit = new EventEmitter<string> ()

  ngOnInit() {
    this.name = this.todo.name
  }

  onEdit () {
    if(this.name)
    this.edit.emit(this.name)
  }

  onCancel() {
    this.name = this.todo.name
    this.edit.emit(this.name)
  }
}
