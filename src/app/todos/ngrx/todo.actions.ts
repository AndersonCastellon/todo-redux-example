import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] create new todo',
  props<{ description: string }>()
);

export const toggle = createAction(
  '[TODO] edit state todo',
  props<{
    id: number;
  }>()
);

export const toggleAll = createAction(
  '[TODO] toggle all',
  props<{ completed: boolean }>()
);

export const edit = createAction(
  '[TODO] edit todo',
  props<{ id: number; description: string }>()
);

export const remove = createAction(
  '[TODO] delete todo',
  props<{ id: number }>()
);

export const removeCompleted = createAction('[TODO] remove completed');
