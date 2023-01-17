import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-form-ui',
  templateUrl: './todo-form-ui.component.html',
  styleUrls: ['./todo-form-ui.component.css']
})
export class TodoFormUiComponent {
  name = '';

  @Output ()
  create = new EventEmitter<string> ()

  onCreate() {
    if (this.name) {
      this.create.emit(this.name)
      this.name = ''
    }
  }
}
