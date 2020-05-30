import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { AvailableFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo',
})
export class FilterTodoPipe implements PipeTransform {
  transform(value: Todo[], filter: AvailableFilters): Todo[] {
    if (filter === 'Completadas') {
      return value.filter((todo: Todo) => todo.completed);
    }

    if (filter === 'Pendientes') {
      return value.filter((todo: Todo) => !todo.completed);
    }

    return value;
  }
}
