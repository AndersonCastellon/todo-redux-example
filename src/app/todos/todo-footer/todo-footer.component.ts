import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { AvailableFilters, filter } from '../../filter/filter.actions';
import { Todo } from '../models/todo.model';
import { removeCompleted } from '../ngrx/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: AvailableFilters = 'Todas';
  filters: AvailableFilters[] = ['Todas', 'Completadas', 'Pendientes'];

  pendings = 0;
  completeds = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.currentFilter = filter;
      this.pendings = todos.filter((todo: Todo) => !todo.completed).length;
      this.completeds = todos.filter((todo: Todo) => todo.completed).length;
    });
  }

  doFilter(f: AvailableFilters) {
    this.store.dispatch(filter({ f }));
  }

  removeCompleted() {
    this.store.dispatch(removeCompleted());
  }
}
