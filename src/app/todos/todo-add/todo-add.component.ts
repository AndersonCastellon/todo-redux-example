import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { create } from '../ngrx/todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: [],
})
export class TodoAddComponent implements OnInit {
  input: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.input = new FormControl('', Validators.required);
  }

  addTodo() {
    console.log(this.input);
    if (this.input.invalid) {
      return;
    }
    this.store.dispatch(create({ description: this.input.value }));

    this.input.reset();
  }
}
