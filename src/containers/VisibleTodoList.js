import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';
import VisibilityFilter from '../constants/VisibilityFilter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_ALL:
      return todos;
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
  }
};

export const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
