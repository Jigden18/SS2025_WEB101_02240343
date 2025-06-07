import React, { useState } from 'react';
import useTodoStore from '../store/todostore';

const TodoInput = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      <input
        type="text"
        value={text}
        placeholder="Add a new todo..."
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>Add</button>
    </form>
  );
};

export default TodoInput;