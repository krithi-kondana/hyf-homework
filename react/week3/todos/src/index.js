import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counter.js';
import TodoList from './components/todolist.js';


ReactDOM.render(
  <div>
    <Counter />
    <TodoList />
  </div>,
  document.getElementById('root')
);