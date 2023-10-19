import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onRemove={() => removeTodo(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
