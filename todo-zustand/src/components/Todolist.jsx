import React from 'react';
import useTodoStore from '../store/todostore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      {todos.some(todo => todo.completed) && (
        <button onClick={clearCompleted} style={{ marginTop: '1rem' }}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoList;