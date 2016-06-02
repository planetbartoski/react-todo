import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';
import VisibilityFilter from '../constants/VisibilityFilter';

/**
 * Returns filtered array of todo items
 *
 * @param {array} todos - array of todo items
 * @param {VisibilityFilter} filter - todos filter
 * @return {array} - filtered array of todo items
 */
function getVisibleTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
}

/**
 * mapStateToProps
 *
 * Transforms current state into props
 * @param {Object} state - current state
 *
 * Exported to allow testing
 */
export function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}

/**
 * mapStateToProps
 *
 * Transforms dispatch function into callback props
 * @param {Function} dispatch - dispatch function
 *
 * Exported to allow testing
 */
export function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
