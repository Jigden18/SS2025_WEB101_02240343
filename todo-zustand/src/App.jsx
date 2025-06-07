import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/Todolist';
import useTodoStore from './store/todostore';

function App() {
  const todos = useTodoStore((state) => state.todos);
  const todoCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="App" style={styles.container}>
      <h1>Todo List with Zustand</h1>
      <TodoInput />
      <div style={styles.stats}>
        <p>Total todos: {todoCount}</p>
        <p>Completed: {completedCount}</p>
      </div>
      <TodoList />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  stats: {
    marginBottom: '1rem',
  },
};

export default App;