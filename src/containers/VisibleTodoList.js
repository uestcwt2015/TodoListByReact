import { connect } from 'react-redux';
import { toggleTodo, visibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const getFilteredTodos = (todos, filter) => {
  switch(filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('Unknown Filter ' + filter);
  }
};

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);