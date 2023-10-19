import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
