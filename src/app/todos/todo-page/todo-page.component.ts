import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { toggleAll } from '../ngrx/todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styles: [],
})
export class TodoPageComponent implements OnInit {
  checkAll: FormControl;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkAll = new FormControl();

    this.checkAll.valueChanges.subscribe((check: boolean) => {
      this.store.dispatch(toggleAll({ completed: check }));
    });
  }
}
