import React from 'react';
import AddTodo from '../../containers/AddTodo';
import TodoFilters from '../../containers/TodoFilter';
import VisibleTodoList from '../../containers/VisibleTodoList';

const App = props => {
  return (
    <div className="app">
      <AddTodo></AddTodo>
      <TodoFilters></TodoFilters>
      <VisibleTodoList></VisibleTodoList>
    </div>
  );
};

export default App;