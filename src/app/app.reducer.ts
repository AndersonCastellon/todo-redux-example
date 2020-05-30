import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/ngrx/todo.reducer';
import { filterReducer } from './filter/filter.reduce';
import { AvailableFilters } from './filter/filter.actions';

export interface AppState {
  todos: Todo[];
  filter: AvailableFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer,
};
