import React from 'react';
import useTodoStore from '../store/todostore';

const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li style={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{
        ...styles.text,
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000'
      }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} style={styles.button}>Delete</button>
    </li>
  );
};

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.5rem 0',
  },
  text: {
    flex: 1
  },
  button: {
    padding: '0.25rem 0.5rem'
  }
};

export default TodoItem;