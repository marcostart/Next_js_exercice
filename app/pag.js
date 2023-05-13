'use client';
// import Image from 'next/image'
import { useState } from 'react';
import { useMemo } from 'react'

function filterTodos(todos, tab) {
  console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter(todo => {
    if (tab === 'all') {
      return true;
    } else if (tab === 'active') {
      return !todo.completed;
    } else if (tab === 'completed') {
      return todo.completed;
    }
  });
}

function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5
    });
  }
  return todos;
}

function TodoList({ todos, theme, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab]
  );
  return (
    <div className={theme}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

const todos = createTodos();

export default function Home() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
        <button onClick={() => setTab('all')}>
          All
        </button>
        <button onClick={() => setTab('active')}>
          Active
        </button>
        <button onClick={() => setTab('completed')}>
          Completed
        </button>
        <br />
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={e => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <hr />
        <TodoList
          todos={todos}
          tab={tab}
          theme={isDark ? 'dark' : 'light'}
        />
    </div>
  )
}
