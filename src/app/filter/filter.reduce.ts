import { createReducer, on, Action } from '@ngrx/store';
import { AvailableFilters, filter } from './filter.actions';

const initialState: AvailableFilters = 'Todas';

const reducer = createReducer(
  initialState,
  on(filter, (state, { f }) => f)
);

export function filterReducer(state: AvailableFilters, action: Action) {
  return reducer(state, action);
}
