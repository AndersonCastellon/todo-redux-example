import { Todo } from '../models/todo.model';
import { createReducer, on, Action } from '@ngrx/store';
import {
  create,
  toggle,
  edit,
  remove,
  toggleAll,
  removeCompleted,
} from './todo.actions';

const initialState: Todo[] = [new Todo('Aprender Redux con Angular y Ionic 5')];

const reducer = createReducer(
  initialState,
  on(create, (state, { description }) => [...state, new Todo(description)]),
  on(toggle, (state, { id }) => {
    return state.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, description }) => {
    return state.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          description,
        };
      } else {
        return todo;
      }
    });
  }),
  on(remove, (state, { id }) => state.filter((todo: Todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) => {
    return state.map((todo: Todo) => {
      return {
        ...todo,
        completed,
      };
    });
  }),
  on(removeCompleted, (state) => state.filter((todo: Todo) => !todo.completed))
);

export function todoReducer(state: Todo[], action: Action) {
  return reducer(state, action);
}
