import React from 'react';
import PropTypes from 'prop-types'

const TodoItem = ({ id, value, completed, onClick }) => {
  const completedStyle = {
    textDecoration: completed ? 'line-through' : 'none'
  };
  
  return (
    <li 
      className={ completed ? 'todo-item-completed' : 'todo-item-actived'}
      onClick={() => onClick(id)}
      style={ completedStyle }
    >
      { value }
    </li>
  );
};

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    { todos.map((todo, idx) => (
      <TodoItem 
        id={ todo.id }
        value={ todo.value }
        key={ todo.id }
        completed={ todo.completed }
        onClick={ toggleTodo }
      ></TodoItem>
    ))}
  </ul>
);

TodoList.protoTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

TodoItem.protoTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoList;