import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggle, edit, remove } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('editInput') editInput: ElementRef;

  checkbox: FormControl;
  input: FormControl;

  editing = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkbox = new FormControl(this.todo.completed);
    this.input = new FormControl(this.todo.description, Validators.required);

    this.checkbox.valueChanges.subscribe(() => {
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  doEdit() {
    this.editing = true;
    this.input.setValue(this.todo.description);

    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 0);
  }

  saveEditing() {
    this.editing = false;

    if (this.input.invalid || this.input.value === this.todo.description) {
      return;
    }

    this.store.dispatch(
      edit({ id: this.todo.id, description: this.input.value })
    );
  }

  remove() {
    this.store.dispatch(remove({ id: this.todo.id }));
  }
}
