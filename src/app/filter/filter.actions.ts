import { createAction, props } from '@ngrx/store';

export type AvailableFilters = 'Todas' | 'Pendientes' | 'Completadas';

export const filter = createAction(
  '[FILTER] set filter',
  props<{ f: AvailableFilters }>()
);
